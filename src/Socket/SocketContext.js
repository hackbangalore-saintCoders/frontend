import { createContext, useContext, useMemo, useCallback } from "react";
import Cookies from 'js-cookie';


const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = ({ ipKey, topic_talk, children }) => {
  

  if (ipKey === "undefined" || ipKey === null || topic_talk === "undefined" || topic_talk === null || topic_talk === '') {
    ipKey = Cookies.get('cookie-ip');
    topic_talk = Cookies.get('cookie-topic');
  }
  console.log("socketprovider",topic_talk);
  const url = `wss://hammerhead-app-yjxlc.ondigitalocean.app?ip=${ipKey}&topic=${topic_talk}`;

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