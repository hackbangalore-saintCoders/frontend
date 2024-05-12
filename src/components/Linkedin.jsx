
// import React, { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import "./Linkedin.scss";
// import img from "../images/bookcovers.webp";
// import img2 from "../images/voiceover.webp"
// import Chat from "./Chat";
// import { Link, useNavigate } from "react-router-dom";


// const Linkedin = () => {
//     const [jobs, setJobs] = useState([]);
//     const [selectedJob, setSelectedJob] = useState(null);
//     const [showChat, setShowChat] = useState(false);
//     const [signer, setSigner] = useState('');

//     const navigate = useNavigate();

//     // useEffect(() => {
//     //     // Simulate fetching data from the backend
//     //     const fetchData = async () => {
//     //         // Simulated data for demonstration
//     //         const data = [
//     //             {
//     //                 id: 1,
//     //                 title: "Job 1",
//     //                 name: "Aman",
//     //                 description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maxime fugit minima veniam sunt eveniet nostrum sequi, consequuntur inventore in.,.,",
//     //                 domain: "Web Development",
//     //                 rating: 4.5,
//     //                 price: "$1000",
//     //                 img: img
//     //             },
//     //             {
//     //                 id: 2,
//     //                 title: "Job 2",
//     //                 name: "Rohit",
//     //                 description: "sadfgj asasdfg wertyu fgh dfghj dfgh cvbn rty fgh fvbhdo  vdb svhsd vsd d lhvsihv f wweighiergh  fwhf",
//     //                 domain: "Domain 2",
//     //                 rating: 4.0,
//     //                 price: "$800",
//     //                 img: img2
//     //             },
//     //             {
//     //                 id: 3,
//     //                 title: "Job 2",
//     //                 name: "Raj",
//     //                 description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maxime fugit minima veniam sunt eveniet nostrum sequi, consequuntur inventore in.,.,",
//     //                 domain: "Domain 2",
//     //                 rating: 4.0,
//     //                 price: "$800",
//     //                 img: img
//     //             },
//     //             {
//     //                 id: 4,
//     //                 title: "Job 2",
//     //                 name: "Yatharth",
//     //                 description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maxime fugit minima veniam sunt eveniet nostrum sequi, consequuntur inventore in.,.,",
//     //                 domain: "Domain 2",
//     //                 rating: 4.0,
//     //                 price: "$800",
//     //                 img: img
//     //             },
//     //             {
//     //                 id: 5,
//     //                 title: "Job 2",
//     //                 name: "Sharad",
//     //                 description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maxime fugit minima veniam sunt eveniet nostrum sequi, consequuntur inventore in.,.,",
//     //                 domain: "Domain 2",
//     //                 rating: 4.0,
//     //                 price: "$800",
//     //                 img: img
//     //             },
//     //             {
//     //                 id: 6,
//     //                 title: "Job 2",
//     //                 name: "Mahesh",
//     //                 description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maxime fugit minima veniam sunt eveniet nostrum sequi, consequuntur inventore in.,.,",
//     //                 domain: "Domain 2",
//     //                 rating: 4.0,
//     //                 price: "$800",
//     //                 img: img
//     //             },
//     //             {
//     //                 id: 7,
//     //                 title: "Job 2",
//     //                 name: "Gaurav",
//     //                 description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maxime fugit minima veniam sunt eveniet nostrum sequi, consequuntur inventore in.,.,",
//     //                 domain: "Domain 2",
//     //                 rating: 4.0,
//     //                 price: "$800",
//     //                 img: img
//     //             },
//     //             // Add more job objects as needed
//     //         ];

//     //         setJobs(data);
//     //         setSelectedJob(data[0]);
//     //     };

//     //     fetchData();
//     // }, []);


    
//     useEffect(() => {
//         const fetchData = async () => {
//             const baseUrl = "http://localhost:7070/api/jobs"; // Correct API endpoint
//             try {
//                 const response = await fetch(baseUrl);

//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }

//                 const responseData = await response.json();

//                 // Extract data from responseData
//                 const data = responseData.map(job => ({
//                     id: job.id,
//                     title: job.title,
//                     description: job.description,
//                     domain: job.domain,
//                     rating: job.rating,
//                     price: job.price,
//                     img: job.img
//                 }));

//                 setJobs(data);
//                 setIsLoading(false);
//             } catch (error) {
//                 console.error('Error fetching data:', error.message);
//                 setIsLoading(false);
//             }
//         };

//         fetchData();
//     }, []);


//     const handleJobClick = (job) => {
//         setSelectedJob(job);
//     };
    
//     const toggleChat = () => {
//         setShowChat(!showChat);
//     };

//     async function handelMetaMask(){
//         console.log("working")
//         try{
//             const provider = await new ethers.BrowserProvider(window.ethereum);
//             await provider.send("eth_requestAccounts", []);
//             const sign = await provider.getSigner();
//             setSigner(sign);
//             navigate('/payment', { state: { signer } });
//         }catch(error){
//             console.log(error);
//         }
//     }

//     return (
//         <div className="container-fluid py-5 bg-black">
//             <div className="row justify-content-center">
//                 <div className="col-md-3 left bg-dark text-white" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 100px)' }}>
//                     {jobs.map(job => (
//                         <div className="job-item" key={job.id} onClick={() => handleJobClick(job)}>
//                             <div className="d-flex justify-content-between"  >
//                             <img className="img-fluid imageoffreelancer" src={job.img} alt="" />
//                             <h5 className="jobtitle mx-5">{job.title}</h5>
//                             </div>
//                             <p>{job.name}</p>
//                             <p>{job.description.slice(0, 40)}{job.description.length > 20 ? '...' : ''}</p>

//                         </div>
//                     ))}
//                 </div>
//                 <div className="col-md-6 right bg-dark text-white"  style={{ position: 'sticky', top: 0 }}>
//                     {selectedJob && (
//                         <div>
//                             <img className="img-fluid" src={selectedJob.img} alt="" />
//                             <h2>{selectedJob.domain}</h2>
//                             <h5>{selectedJob.name}</h5>
//                             <p>{selectedJob.description}</p>
//                             <p>{selectedJob.price}</p>
//                             <p>Rating: {Array(Math.floor(selectedJob.rating)).fill().map((_, index) => (
//                                 <i key={index} className="bi bi-star-fill stars mx-1 start"></i>
//                             ))}</p>

//                            <div>
//                            <div className="d-flex justify-content-between">
//                            <Link to="/payment"><button onClick={handelMetaMask} className="paymentButton rounded px-5">Continue</button></Link>
//                            <div className="messaging-popup bg-dark text-white">
//                            <Link to="/chat" className="popup-btn d-flex  link" onClick={toggleChat}>
//                                         <img className="msginhimg p-1" src={selectedJob.img} alt="" />
//                                         <h5 className="mt-2 px-1">Messaging</h5>
//                                         <i className="bi bi-chevron-up text-white mt-2 mx-2"></i>
//                                     </Link>
//                                     {showChat && (
//                                         <Chat userName={selectedJob.name} userImage={selectedJob.img} />
//                                     )}
                               
                                
                               
//                            </div>
//                            </div>
//                            </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Linkedin;



import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Link, useNavigate } from "react-router-dom";
import "./Linkedin.scss";
import img from "../images/bookcovers.webp";
import img2 from "../images/voiceover.webp";
import Chat from "./Chat";

const Linkedin = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [showChat, setShowChat] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const baseUrl = "http://localhost:7070/api/jobs"; // Correct API endpoint
            try {
                const response = await fetch(baseUrl);

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const responseData = await response.json();

                // Extract data from responseData
                const data = responseData.map(job => ({
                    id: job.id,
                    title: job.title,
                    description: job.description,
                    domain: job.domain,
                    rating: job.rating,
                    price: job.price,
                    img: job.img
                }));

                setJobs(data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);

    const handleJobClick = (job) => {
        setSelectedJob(job);
    };
    
    const toggleChat = () => {
        setShowChat(!showChat);
    };

    async function handleMetaMask() {
        console.log("working")
        try {
            const provider = await new ethers.BrowserProvider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = await provider.getSigner();
            navigate('/payment'); // Direct navigation
        } catch (error) {
            console.log(error);
            // Handle error gracefully
        }
    }

    return (
        <div className="container-fluid py-5 bg-black">
            <div className="row justify-content-center">
                <div className="col-md-3 left bg-dark text-white" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 100px)' }}>
                    {jobs.map(job => (
                        <div className="job-item" key={job.id} onClick={() => handleJobClick(job)}>
                            <div className="d-flex justify-content-between">
                                <img className="img-fluid imageoffreelancer" src={job.img} alt="" />
                                <h5 className="jobtitle mx-5">{job.title}</h5>
                            </div>
                            <p>{job.name}</p>
                            <p>{job.description.slice(0, 40)}{job.description.length > 20 ? '...' : ''}</p>
                        </div>
                    ))}
                </div>
                <div className="col-md-6 right bg-dark text-white" style={{ position: 'sticky', top: 0 }}>
                    {selectedJob && (
                        <div>
                            <img className="img-fluid" src={selectedJob.img} alt="" />
                            <h2>{selectedJob.domain}</h2>
                            <h5>{selectedJob.name}</h5>
                            <p>{selectedJob.description}</p>
                            <p>{selectedJob.price}</p>
                            <p>Rating: {Array(Math.floor(selectedJob.rating)).fill().map((_, index) => (
                                <i key={index} className="bi bi-star-fill stars mx-1 start"></i>
                            ))}</p>

                            <div>
                                <div className="d-flex justify-content-between">
                                    <button onClick={handleMetaMask} className="paymentButton rounded px-5">Continue</button>
                                    <div className="messaging-popup bg-dark text-white">
                                        <Link to="/chat" className="popup-btn d-flex  link" onClick={toggleChat}>
                                            <img className="msginhimg p-1" src={selectedJob.img} alt="" />
                                            <h5 className="mt-2 px-1">Messaging</h5>
                                            <i className="bi bi-chevron-up text-white mt-2 mx-2"></i>
                                        </Link>
                                        {showChat && (
                                            <Chat userName={selectedJob.name} userImage={selectedJob.img} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Linkedin;
