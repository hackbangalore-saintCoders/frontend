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
import Payment from "./components/Payment"
import Userform from './components/Userform';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import"./App.css";
import Linkedin from './components/Linkedin';
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
        <Route path="/findjobs" element={<Linkedin />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/userform" element={<Userform />} />
        

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
