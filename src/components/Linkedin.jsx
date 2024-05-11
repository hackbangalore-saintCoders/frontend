// import React, { useState, useEffect } from "react";
// import "./Linkedin.scss";
// import img from "../images/bookcovers.webp";

// const Linkedin = () => {
//     const [jobs, setJobs] = useState([]);

//     useEffect(() => {
//         // Simulate fetching data from the backend
//         const fetchData = async () => {
//             // Simulated data for demonstration
//             const data = [
//                 {
//                     id: 1,
//                     title: "Job 1",
//                     name: "Aman",
//                     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maxime fugit minima veniam sunt eveniet nostrum sequi, consequuntur inventore in.,.,",
//                     domain: "Domain 1",
//                     rating: 4.5,
//                     price: "$1000",
//                     img: img
//                 },
//                 {
//                     id: 2,
//                     title: "Job 2",
//                     name: "Aman",
//                     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maxime fugit minima veniam sunt eveniet nostrum sequi, consequuntur inventore in.,.,",
//                     domain: "Domain 2",
//                     rating: 4.0,
//                     price: "$800",
//                     img: img
//                 },
//                 {
//                     id: 3,
//                     title: "Job 2",
//                     name: "Aman",
//                     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maxime fugit minima veniam sunt eveniet nostrum sequi, consequuntur inventore in.,.,",
//                     domain: "Domain 2",
//                     rating: 4.0,
//                     price: "$800",
//                     img: img
//                 },
//                 {
//                     id: 4,
//                     title: "Job 2",
//                     name: "Aman",
//                     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maxime fugit minima veniam sunt eveniet nostrum sequi, consequuntur inventore in.,.,",
//                     domain: "Domain 2",
//                     rating: 4.0,
//                     price: "$800",
//                     img: img
//                 },
//                 {
//                     id: 5,
//                     title: "Job 2",
//                     name: "Aman",
//                     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maxime fugit minima veniam sunt eveniet nostrum sequi, consequuntur inventore in.,.,",
//                     domain: "Domain 2",
//                     rating: 4.0,
//                     price: "$800",
//                     img: img
//                 },
//                 {
//                     id: 6,
//                     title: "Job 2",
//                     name: "Aman",
//                     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maxime fugit minima veniam sunt eveniet nostrum sequi, consequuntur inventore in.,.,",
//                     domain: "Domain 2",
//                     rating: 4.0,
//                     price: "$800",
//                     img: img
//                 },
//                 {
//                     id: 7,
//                     title: "Job 2",
//                     name: "Aman",
//                     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non maxime fugit minima veniam sunt eveniet nostrum sequi, consequuntur inventore in.,.,",
//                     domain: "Domain 2",
//                     rating: 4.0,
//                     price: "$800",
//                     img: img
//                 },
//                 // Add more job objects as needed
//             ];

//             setJobs(data);
//         };

//         fetchData();
//     }, []);


//     return (
//         <div className="container">
//             <div className="row">
//                 {
//                     jobs.map(job=>(
//                         <div className="col-md-4 left">
//                  <div className="row">
//                     <div className="col-md-3">
//                         <div className="img">
//                             <img className="img-fluid imageoffreelancer" src={jobs.img} alt="" />
//                         </div>
//                     </div>
//                     <div className="col-md-7">
//                         <h4 className="role">{jobs.domain}</h4>
//                         <p className="nameoffreelancer">{jobs.name}</p>
//                         <p className="skilldesc">{jobs.description.slice(0, 15)}{jobs.description.length > 15 ? '...' : ''}</p>
//                         <p className="priceofwork">{jobs.price}</p>
//                     </div>
//                  </div>
//                 </div>
//                     ))
//                 }


//                 <div className="com-md-7 right">
//                     <div>
//                     <img className="img-fluid imageoffreelancer" src={jobs.img} alt="" />
//                     <h2 className="role">{jobs.domain}</h2>

//                     </div>
//                     <h5 className="nameoffreelancer">{jobs.name}</h5>
//                     <p className="skilldescplus">{jobs.description}</p>
//                     <p className="priceofwork">{jobs.price}</p>
//                     <p className="list-group-item rating bg-black text-white">
//                                         Rating: {jobs.rating} 
//                                         {[...Array(Math.floor(jobs.rating))].map((_, index) => (
//                                             <i key={index} className="bi bi-star-fill stars mx-1 start"></i>
//                                         ))}
//                                     </p>
                    
//                     <button className="continuetopayment">Pay</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Linkedin;



import React, { useState, useEffect } from "react";
import "./Linkedin.scss";
import img from "../images/bookcovers.webp";
import img2 from "../images/voiceover.webp"

const Linkedin = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

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
        };

        fetchData();
    }, []);

    const handleJobClick = (job) => {
        setSelectedJob(job);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 left bg-dark text-white" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 100px)' }}>
                    {jobs.map(job => (
                        <div className="job-item" key={job.id} onClick={() => handleJobClick(job)}>
                            <div className="d-flex justify-content-between"  >
                            <img className="img-fluid imageoffreelancer" src={job.img} alt="" />
                            <h5 className="jobtitle mx-5">{job.title}</h5>
                            </div>
                            <p>{job.description}</p>
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
                            <p>Rating: {selectedJob.rating}</p>
                            {/* Additional details */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Linkedin;
