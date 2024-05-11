
import React, { useState, useEffect } from "react";
import "./Linkedin.scss";
import img from "../images/bookcovers.webp";
import img2 from "../images/voiceover.webp"
import Chat from "./Chat";
import { Link } from "react-router-dom";

const Linkedin = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [showChat, setShowChat] = useState(false);

    useEffect(() => {
        // Simulate fetching data from the backend
        const fetchData = async () => {
            // Simulated data for demonstration
            const data = [
                {
                    id: 1,
                    title: "Job 1",
                    name: "Aman",
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maxime fugit minima veniam sunt eveniet nostrum sequi, consequuntur inventore in.,.,",
                    domain: "Domain 1",
                    rating: 4.5,
                    price: "$1000",
                    img: img
                },
                {
                    id: 2,
                    title: "Job 2",
                    name: "Aman",
                    description: "sadfgj asasdfg wertyu fgh dfghj dfgh cvbn rty fgh fvbhdo  vdb svhsd vsd d lhvsihv f wweighiergh  fwhf",
                    domain: "Domain 2",
                    rating: 4.0,
                    price: "$800",
                    img: img2
                },
                {
                    id: 3,
                    title: "Job 2",
                    name: "Aman",
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maxime fugit minima veniam sunt eveniet nostrum sequi, consequuntur inventore in.,.,",
                    domain: "Domain 2",
                    rating: 4.0,
                    price: "$800",
                    img: img
                },
                {
                    id: 4,
                    title: "Job 2",
                    name: "Aman",
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maxime fugit minima veniam sunt eveniet nostrum sequi, consequuntur inventore in.,.,",
                    domain: "Domain 2",
                    rating: 4.0,
                    price: "$800",
                    img: img
                },
                {
                    id: 5,
                    title: "Job 2",
                    name: "Aman",
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maxime fugit minima veniam sunt eveniet nostrum sequi, consequuntur inventore in.,.,",
                    domain: "Domain 2",
                    rating: 4.0,
                    price: "$800",
                    img: img
                },
                {
                    id: 6,
                    title: "Job 2",
                    name: "Aman",
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maxime fugit minima veniam sunt eveniet nostrum sequi, consequuntur inventore in.,.,",
                    domain: "Domain 2",
                    rating: 4.0,
                    price: "$800",
                    img: img
                },
                {
                    id: 7,
                    title: "Job 2",
                    name: "Aman",
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maxime fugit minima veniam sunt eveniet nostrum sequi, consequuntur inventore in.,.,",
                    domain: "Domain 2",
                    rating: 4.0,
                    price: "$800",
                    img: img
                },
                // Add more job objects as needed
            ];

            setJobs(data);
            setSelectedJob(data[0]);
        };

        fetchData();
    }, []);

    const handleJobClick = (job) => {
        setSelectedJob(job);
    };
    
    const toggleChat = () => {
        setShowChat(!showChat);
    };
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4 left bg-dark text-white" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 100px)' }}>
                    {jobs.map(job => (
                        <div className="job-item" key={job.id} onClick={() => handleJobClick(job)}>
                            <div className="d-flex justify-content-between"  >
                            <img className="img-fluid imageoffreelancer" src={job.img} alt="" />
                            <h5 className="jobtitle mx-5">{job.title}</h5>
                            </div>
                            <p>{job.name}</p>
                            <p>{job.description.slice(0, 40)}{job.description.length > 20 ? '...' : ''}</p>

                        </div>
                    ))}
                </div>
                <div className="col-md-8 right bg-dark text-white"  style={{ position: 'sticky', top: 0 }}>
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
                           <button className="paymentButton rounded px-5">Continue</button>
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
