import React, { useState } from 'react';
import "./UploadResume.scss"
import { Link } from 'react-router-dom';
import FreelancerDashboard from "./FreelancerDashboard"
const UploadResume = () => {
  const [resume, setResume] = useState(null);
  const [resumeURL, setResumeURL] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);

  const handleUpload = async () => {
    // Simulated upload process
    try {
      // Simulated delay for upload process
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Simulated progress update
      setUploadProgress(50);
      // Simulated delay for upload completion
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Simulated progress update
      setUploadProgress(100);
      // Simulated resume URL
      setResumeURL('https://example.com/resume');
    } catch (error) {
      setUploadError('Error uploading resume');
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center  bg-black">
    <div className="card bg-dark text-white cardbody rounded">
      <div className="card-body">
        <h2 className="card-title">Upload Your Resume</h2>
        <input type="file" onChange={handleChange} className="form-control mb-3" />
        <button onClick={handleUpload} className="btn btn-primary">Upload</button>
        {uploadProgress > 0 && <p className="mt-3">Upload Progress: {uploadProgress}%</p>}
        {uploadError && <p className="mt-3 text-danger">Error: {uploadError}</p>}
        {resumeURL && (
          <div className="mt-3">
            <p className='successful'>Resume Uploaded Successfully!</p>
            <p>Resume URL: <a href={resumeURL} target="_blank" rel="noopener noreferrer">{resumeURL}</a></p>
            <Link to="/FreelancerDashboard"><button className="btn btn-primary">Next</button></Link>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default UploadResume;
