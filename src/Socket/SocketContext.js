import React, { createContext, useContext, useMemo, useCallback } from "react";

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = ({ roomID, userID,type, children }) => {
  const url = `ws://localhost:9000/webrtc-socket/${roomID}/${userID}/${type}`;

  const socket = useMemo(() => new WebSocket(url), [url]);

  socket.onclose = function (event) {
    console.log("WebSocket connection closed.");
  };

  socket.onopen = function (event) {
    console.log("WebSocket connection established.");
  };

  socket.onerror = function (error) {
    console.error("WebSocket error:", error);
  };

  const handleOtherMessageType = useCallback((data) => {
    // Handle other message types here
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};