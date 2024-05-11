// import React, { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import "./Register.scss";
// import {app} from "../Firebase";
// const Register = () => {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const auth = getAuth();
//             await createUserWithEmailAndPassword(auth, email, password);
//             // User registered successfully
//             console.log("User registered");
//             // Redirect or perform other actions after registration
//         } catch (error) {
//             // Handle registration errors
//             console.error("Registration error:", error);
//         }
//     };

//     return (
//         <div className="register-container">
//             <div className="form-box register">
//                 <form onSubmit={handleSubmit}>
//                     <h1>Registration</h1>
//                     <div className="input-box">
//                         <input type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
//                         <i className="bi bi-person-fill username"></i>
//                     </div>
//                     <div className="input-box">
//                         <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
//                         <i className="bi bi-envelope-fill email"></i>
//                     </div>
//                     <div className="input-box">
//                         <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
//                         <i className="bi bi-lock-fill icon"></i>
//                     </div>
//                     <div className="remember-forgot">
//                         <label><input type="checkbox" />I agree to the terms & conditions</label>
//                     </div>
//                     <button className="registerbtn" type="submit">Register</button>
//                     <div className="register-link text-center py-4">
//                         <p>Already have an account?
//                             <a href="/login">Login</a>
//                         </p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Register;

import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./Register.scss";
import {app} from "../Firebase";
import { Navigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password);
            // User registered successfully
            console.log("User registered");
            // Redirect to uploadResume page
            setRedirect(true);
        } catch (error) {
            // Handle registration errors
            console.error("Registration error:", error);
        }
    };

    // Check for redirect before rendering JSX
    if (redirect) {
        return <Navigate to="/uploadResume" />;
    }

    return (
        <div className="register-container">
            <div className="form-box register">
                <form onSubmit={handleSubmit}>
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
                        <i className="bi bi-person-fill username"></i>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                        <i className="bi bi-envelope-fill email"></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                        <i className="bi bi-lock-fill icon"></i>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />I agree to the terms & conditions</label>
                    </div>
                    <button className="registerbtn" type="submit">Register</button>
                    <div className="register-link text-center py-4">
                        <p>Already have an account?
                            <a href="/login">Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;

