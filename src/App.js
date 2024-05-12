import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from './components/Home';
import Login from "./components/Login"
import Register from './components/Register';
import FreelancerDashboard from './components/FreelancerDashboard';
import UploadResume from "./components/UploadResume";
import Findjobs from './components/Findjobs';
import Chat from './components/Chat';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import"./App.css";
import Cookies from 'js-cookie';


import Lobby from './webrtc/Lobby';
import { SocketProvider } from './Socket/SocketContext';

import Room from './webrtc/Room';




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freelancerdashboard" element={<FreelancerDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/uploadResume" element={<UploadResume />} />
        <Route path="/findjobs" element={<Findjobs />} />
        <Route path="/chat" element={<Chat />} />



        {/* LOBBY */}

        <Route path="/lobby/:roomID/:userID/:role" element={<Lobby/>} />


        <Route path="/room/:roomID/:userID/:role" element={<LobbyWithSocket/> }/>

        

      </Routes>
      <Footer />
      
    </Router>
  );
}

function LobbyWithSocket() {
  let ipKeyval = Cookies.get('cookie-ip');
  let topic = Cookies.get('cookie-topic');

  console.log("Route-key", ipKeyval);
  console.log("Route-Topic", topic);

  if (ipKeyval === "undefined" || ipKeyval === null || topic === "undefined" || topic === null || topic === '') {
    return <Lobby />;
  }

  return (
    <SocketProvider ipKey={ipKeyval} topic_talk ={topic}>
      <Room />
    </SocketProvider>
  );
}

export default App;
