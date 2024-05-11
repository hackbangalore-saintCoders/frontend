import React, { useState, useEffect } from "react";
import "./FreelancerDashboard.scss"; // Import CSS file for custom styling
import pp from "./WhatsApp Image 2022-12-31 at 11.21.14 AM.jpeg";

function FreelancerDashboard() {
  const [userData, setUserData] = useState(null); // State to store user data
  const [showAllSkills, setShowAllSkills] = useState(false); // State to toggle showing all skills
  const [newSkill, setNewSkill] = useState(""); // State to store new skill input

  // Simulate fetching user data from the backend
  useEffect(() => {
    // Replace this with an actual fetch call to your backend API
    // Example:
    // fetchUserData().then((data) => setUserData(data));
    // where fetchUserData is a function that fetches user data from your backend API
    setTimeout(() => {
      // Simulated user data
      const userDataFromBackend = {
        name: "John Doe", // User's name
        profilePhoto: pp,
        desc: "ghktrgskrghkhtrhgnv gst sg rg gisgh gsrhg sgs gsdgh sghrgregaegfagre ergrae ",
        skills: ["MERN Stack", "React.js", "JavaScript", "Node.js"],
        education: [
          { institution: "University of Example", degree: "Bachelor's in Computer Science" },
          { institution: "Example College", degree: "Master's in Software Engineering" }
        ]
      };
      setUserData(userDataFromBackend);
    }, 1000); // Simulated delay for fetching data
  }, []);

  const handleShowAllSkills = () => {
    setShowAllSkills(!showAllSkills);
  };

  const handleChangeNewSkill = (event) => {
    setNewSkill(event.target.value);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setUserData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, newSkill.trim()]
      }));
      setNewSkill("");
    }
  };

  return (
    <div className="container-fluid bg-black text-white"> {/* Set black background */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-8 d-flex align-items-center mb-3 user-profile  ">
              <img src={userData?.profilePhoto} alt="Profile" className=" mr-3" />
              <div className="mx-5 px-5">
                <h2>{userData?.name}</h2>
                <p>{userData?.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row  justify-content-center my-3 py-3">
        <div className="col-md-8 educations p-3 rounded shadows">
          <h3>Education</h3>
          <ul className="list-group my-3 py-2">
            {userData?.education.map((edu, index) => (
              <li key={index} className=" skills list-group-item text-white">
                {edu.degree} - {edu.institution}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row  justify-content-center py-3 pb-5 ">
        <div className="col-md-8 skills p-3 rounded shadows">
          <h3>Skills</h3>
          <ul className="list-group mb-3 my-3 py-2">
            {userData?.skills.slice(0, showAllSkills ? undefined : 2).map((skill, index) => (
              <li key={index} className="list-group-item skills text-white">{skill}</li>
            ))}
          </ul>
          {userData?.skills.length > 2 && (
            <button className="btn btn-primary mb-3" onClick={handleShowAllSkills}>
              {showAllSkills ? "Hide Skills" : "Show All Skills"}
            </button>
          )}
          <div className="mb-3">
            <input
              type="text"
              value={newSkill}
              onChange={handleChangeNewSkill}
              placeholder="Enter new skill"
              className="form-control custom-input"
            />
 <div className="d-flex align-items-center">
    <i onClick={handleAddSkill} className="bi bi-plus-lg plusSkill mr-2"></i> {/* Added mr-2 class for right margin */}
    <p className="mb-0 plusSkill" >Add Skills</p> {/* Removed margin from the bottom (mb-0) */}
  </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreelancerDashboard;
