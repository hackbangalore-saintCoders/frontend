import React, { useEffect, useState, useRef, useCallback } from "react";
import ReactPlayer from "react-player";
import { useSocket } from "../Socket/SocketContext";
import Peer from "../Service/Peer";
import Editor from '@monaco-editor/react';



const Room = () => {
    const [localStream, setLocalStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);
    const [hasVideoAccess, setHasVideoAccess] = useState(false);
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const socket = useSocket();
    const editorRef = useRef(null);

    function handleEditorDidMount(editor) {
        editorRef.current = editor;
    }
  

//    useEffect (()=> {
//         if (remoteStream != null && localStream != null) {
//             if (socket) {
//                 socket.close();
//                 console.log("close ws");
//             }
//         }
//     });

    const getMediaStream = useCallback(async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: true
            });
            setLocalStream(stream);
            setHasVideoAccess(true);
        } catch (error) {
            console.error("Error accessing video:", error);
        }
    }, []);

    useEffect(() => {
        getMediaStream();
        document.documentElement.style.overflow = 'hidden';
        return () => {
            document.documentElement.style.overflow = 'unset';
        };
    }, []);

    useEffect(() => {
        const updateContainerSize = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
                setContainerHeight(containerRef.current.offsetHeight);
            }
        };
        updateContainerSize();
        window.addEventListener("resize", updateContainerSize);
        return () => window.removeEventListener("resize", updateContainerSize);
    }, [containerRef]);

    const handleSocketMessage = useCallback(async(data) => {
        if (localStream === null) {
            console.log(false);
        }

        switch (data.type) {
            case "caller":
                console.log("caller", data);
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: true
                });
                const offer = await Peer.createOffer(stream);
                const offerMessage = JSON.stringify(offer);
                const offerOutput = {
                    roomID: data.roomID,
                    type: "offer",
                    message: offerMessage
                };
                socket.send(JSON.stringify(offerOutput));
                console.log(stream);
                break;
            case "receiver":
                console.log("receiver", data);
                // Handle receiver logic
                break;
            case "offer":
                console.log("Offer Received", data);
                if (!data.message) {
                    return socket.close();
                }
                const offerParse = JSON.parse(data.message);
                const streamedia = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: true
                });
                const answer = await Peer.getAnswer(offerParse, streamedia);
                const answerMessage = JSON.stringify(answer);
                const answerOutput = {
                    roomID: data.roomID,
                    type: "answer",
                    message: answerMessage
                };
                console.log("offer",answerOutput);
                socket.send(JSON.stringify(answerOutput));


                //After Answer Send ICE

                await new Promise((resolve, reject) => {
                    const timeout = setTimeout(() => {
                        reject(new Error("ICE candidates not available after timeout"));
                    }, 8000);
                    const checkIceCandidates = setInterval(() => {
                        const ice = Peer.getIceCandidates();
                        console.log("PEER ICEEEE", ice);
                        const iceData = {
                            "roomID" : data.roomID,
                            "type": "candidate",
                            "message": ice
                        };
                        socket.send(JSON.stringify(iceData));
                        if (ice.length > 0) {
                            clearInterval(checkIceCandidates);
                            clearTimeout(timeout);
                            resolve();
                        }
                    }, 100);
                });

                break;
                case "answer":
                    console.log("Answer Received", data);
                    
                    try {
                        const answerParse = JSON.parse(data.message);
                        // Handle answer logic
                        await Peer.setRemoteDescription(answerParse);
                
                        await new Promise((resolve, reject) => {
                            const timeout = setTimeout(() => {
                                reject(new Error("ICE candidates not available after timeout"));
                                clearInterval(checkIceCandidates);
                            }, 20000);
                            const checkIceCandidates = setInterval(() => {
                                const ice = Peer.getIceCandidates();
                                console.log("PEER ICEEEE", ice);
                                const iceData = {
                                    "roomID": data.roomID,
                                    "type": "candidate",
                                    "message": ice
                                };
                                socket.send(JSON.stringify(iceData));
                                if (ice.length > 0) {
                                    clearInterval(checkIceCandidates);
                                    clearTimeout(timeout);
                                    resolve();
                                }
                            }, 100);
                        });
                    } catch (error) {
                        console.error("Error processing answer:", error);
                        socket.close();
                    }
                    break;
                

            case "candidate":
                console.log("Received ICE candidate:", data.message);

                if(data.message === null){
                    socket.close();
                }

                if (data.message) {

                    data.message.forEach(candidate => {
                        Peer.addIceCandidate(candidate);
                    });

                    const subscribeToRemoteStream = async () => {
                        try {
                           
                            const remoteStream = await Peer.getRemoteStream();
                            console.log(remoteStream);
                            setRemoteStream(remoteStream);
                        } catch (error) {
                            console.error('Error subscribing to remote stream:', error);
                        }
                    };
            
                    subscribeToRemoteStream();
                    
                } else {
                    console.log("No ICE candidates found in the message.");
                }
                break;
                break
            default:
                console.log("Unhandled message type:", data);
        }
        
    }, [localStream]);

    useEffect(() => {

        getMediaStream();
    
        const handleMessage = (event) => {
            const data = JSON.parse(event.data);
            console.log("handleSocketMessage", data);
            handleSocketMessage(data);
        };
        if (socket) {
            socket.onmessage = handleMessage;
        } else {
            console.log("Socket missing.");
        }
        return () => {
            if (socket) {
                socket.onmessage = null;
                socket.onerror = null;
            }
        };
    }, [socket]);

    useEffect(() => {
        // Add event listener for ICE connection state change
        if (Peer.peer) {
            Peer.peer.oniceconnectionstatechange = handleIceConnectionStateChange;
        }

        // Cleanup function
        return () => {
            if (Peer.peer) {
                Peer.peer.oniceconnectionstatechange = null;
            }
        };
    }, []);

    const handleIceConnectionStateChange = () => {
        if (Peer.peer) {
            console.log("ICE connection state:", Peer.peer.iceConnectionState);
            if (Peer.peer.iceConnectionState === "disconnected" || Peer.peer.iceConnectionState === "failed") {
                // Peer has exited or disconnected
                console.log("Peer has exited or disconnected.");
                setRemoteStream(null); // Update remoteStream state to reflect disconnection
            }
        }
    };


    
    // useEffect(() => {
    //     handleCloseSocket();
    // }, [remoteStream]);

    const handleStartButtonClick = () => {
        // Implement start button action
        window.location.reload();
    };

    const handleStopButtonClick = () => {
        // Disconnect from WebRTC
        Peer.close();
    
        // Close the socket connection
        if (socket) {
            socket.close();
        }
     };

    return (
        <div className="container-fluid h-100 bg-black">
            <div className="row h-100 d-flex ">
                <div className="col-lg-6 p-4  align-items-center justify-content-center">
                    <ReactPlayer
                        className='  rounded-lg border border-light'
                        playing
                        height="50%"
                        width="50%"
                        muted
                        style={{ objectFit: 'fit' }}
                        url={localStream}
                    />
                       <ReactPlayer
                        className='mt-5 rounded-lg border border-light'
                        playing
                        height="50%"
                        width="50%"
                        style={{ objectFit: 'fit' }}
                        url={localStream}
                    />
                    {/* You can add Bootstrap buttons or other components here */}
                </div>
                <div className="col-lg-6 p-4 text-white align-items-center justify-content-center">


                <Editor
                    className="h-full w-full bg-black"
                    onMount={handleEditorDidMount}
                    theme='vs-dark'
                    defaultLanguage="javascript"
                    // defaultValue={code}
                    // value={code} // Pass the 'code' state as the value prop
                    // onChange={handleCodeChange} // Pass the event handler for code changes
                />

                   
                 
                   
                </div>
            </div>

        </div>
    );
}

export default Room;
