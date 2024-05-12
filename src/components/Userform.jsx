import React, { useState } from 'react';

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        roles: "",
        location: "",
        language: "",
        phoneNumber: "",
        bio: "",
        skill: "",
        rating: 0, // Assuming default rating is 0
        profilePic: null,
        resume: null
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const newValue = type === 'file' ? e.target.files[0] : value;
        setFormData({
            ...formData,
            [name]: newValue
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            for (const key in formData) {
                formDataToSend.append(key, formData[key]);
            }
            const response = await fetch("http://localhost:7070/api/users/", {
                method: 'POST',
                body: formDataToSend
            });
            if (!response.ok) {
                throw new Error('Failed to submit form data');
            }
            // Handle success response from the backend, e.g., display a success message
            console.log('Form data submitted successfully');
        } catch (error) {
            // Handle errors, e.g., display an error message
            console.error('Error submitting form data:', error.message);
        }
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="roles" className="form-label">Roles</label>
                            <input type="text" className="form-control" id="roles" name="roles" value={formData.roles} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="location" className="form-label">Location</label>
                            <input type="text" className="form-control" id="location" name="location" value={formData.location} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="language" className="form-label">Language</label>
                            <input type="text" className="form-control" id="language" name="language" value={formData.language} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="bio" className="form-label">Bio</label>
                            <textarea className="form-control" id="bio" name="bio" value={formData.bio} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="skill" className="form-label">Skill</label>
                            <input type="text" className="form-control" id="skill" name="skill" value={formData.skill} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rating" className="form-label">Rating</label>
                            <input type="number" className="form-control" id="rating" name="rating" value={formData.rating} onChange={handleChange} />
                        </div>
                        {/* Add more input fields for profilePic and resume */}
                        <div className="mb-3">
                            <label htmlFor="profilePic" className="form-label">Profile Picture</label>
                            <input type="file" className="form-control" id="profilePic" name="profilePic" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="resume" className="form-label">Resume</label>
                            <input type="file" className="form-control" id="resume" name="resume" onChange={handleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserForm;
