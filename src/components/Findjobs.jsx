import React, { useState,useEffect } from 'react';
import "./Findjobs.scss";


const Findjobs = () => {
    const [sort, setSort] = useState("sales");

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };






    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        // Simulate fetching data from the backend
        const fetchData = async () => {
            // Perform API fetch here
            // Example: const response = await fetch('api_endpoint');
            // Example: const data = await response.json();
            
            // Simulated data for demonstration
            const data = [
                {
                    id: 1,
                    title: "Job 1",
                    description: "Description of job 1",
                    domain: "Domain 1",
                    rating: 4.5,
                    price: "$1000"
                },
                {
                    id: 2,
                    title: "Job 2",
                    description: "Description of job 2",
                    domain: "Domain 2",
                    rating: 4.0,
                    price: "$800"
                },
                {
                    id: 2,
                    title: "Job 2",
                    description: "Description of job 2",
                    domain: "Domain 2",
                    rating: 4.0,
                    price: "$800"
                },
                {
                    id: 3,
                    title: "Job 2",
                    description: "Description of job 2",
                    domain: "Domain 2",
                    rating: 4.0,
                    price: "$800"
                },
                {
                    id: 4,
                    title: "Job 2",
                    description: "Description of job 2",
                    domain: "Domain 2",
                    rating: 4.0,
                    price: "$800"
                },
                {
                    id: 5,
                    title: "Job 2",
                    description: "Description of job 2",
                    domain: "Domain 2",
                    rating: 4.0,
                    price: "$800"
                },
                {
                    id: 6,
                    title: "Job 2",
                    description: "Description of job 2",
                    domain: "Domain 2",
                    rating: 4.0,
                    price: "$800"
                },
                // Add more job objects as needed
            ];

            setJobs(data);
        };

        fetchData();
    }, []); // Empty dependency array to run the effect only once

    
















    return (
        <div className="container-fluid bg-dark text-white pb-5">
            <div className="row pt-5 justify-content-center"> {/* Centering the row */}
                <div className="col-md-3 searchbox justify-content-center"> {/* Adjusting the column size */}
                    <form className="form">
                        <i className="sicon fa-solid fa-magnifying-glass"></i>
                        <input className="homeinput" type="text" placeholder="Search for the job" />
                        <button className="homebtn" type="submit">Search</button>
                    </form>
                </div>
            </div>

            <div className="row pt-5 justify-content-between">
                <div className="col-md-7 mx-3">
                    <div className="filterBudget d-flex">
                        <h4>Budget</h4>
                        <div className="input">
                            <input type="number" placeholder="min" />
                            <input type="number" placeholder="max" />
                        </div>
                        <button className="applyfilter">Apply</button>
                    </div>
                </div>
                <div className="col-md-3 text-white d-flex sortby">
                    <p className='mt-1'>Sort by</p>
                    <select className='select' value={sort} onChange={handleSortChange}>
                        <option value="sales">Best Selling</option>
                        <option value="createdAt">Newest</option>
                    </select>
                </div>

                <div className="row py-5 my-3">
                    {jobs.map(job => (
                        <div key={job.id} className="col-md-3 mb-3">
                            <div className="card bg-black text-white card-rest">
                               
                                <img src="..." className="card-img-top card-image-job img-fluid" alt="Job Thumbnail" />
                                <div className="card-body bg-black text-white">
                                    <h5 className="card-title domain">{job.title}</h5>
                                    <p className="card-text desc">{job.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item name bg-black text-white">{job.domain}</li>
                                    <li className="list-group-item rating bg-black text-white">
                                        Rating: {job.rating} 
                                        {[...Array(Math.floor(job.rating))].map((_, index) => (
                                            <i key={index} className="bi bi-star-fill stars mx-1 start"></i>
                                        ))}
                                    </li>
                                    <li className="list-group-item price bg-black text-white">Price: {job.price}</li>
                                </ul>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
}

export default Findjobs;
