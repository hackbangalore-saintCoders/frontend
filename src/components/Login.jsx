

// import React, { useState } from "react";
// import {auth} from "../Firebase"
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import "./Login.scss";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const auth = getAuth();
//             await signInWithEmailAndPassword(auth, email, password);
//             // User logged in successfully
//             console.log("User logged in");
//             // Redirect or perform other actions after login
//         } catch (error) {
//             // Handle login errors
//             console.error("Login error:", error);
//         }
//     };

//     return (
//         <div className="container-fluid login-container">
//             <div className="row">
//                 <div className="col-md-10">
//                     <div className={`wrapper`}>
//                         <div className="form-box login">
//                             <form onSubmit={handleLogin}>
//                                 <h1>Login</h1>
//                                 <div className="input-box">
//                                     <input type="text" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
//                                     <i className="bi bi-envelope-fill email"></i>
//                                 </div>
//                                 <div className="input-box">
//                                     <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
//                                     <i className="bi bi-lock-fill icon"></i>
//                                 </div>
//                                 <div className="remember-forgot">
//                                     <label><input type="checkbox" />Remember me</label>
//                                     <a href="#">Forgot Password</a>
//                                 </div>
//                                 <button className="loginbtn" type="submit">Login</button>
//                                 <div className="register-link text-center py-4">
//                                     <p>Don't have an account?
//                                     <a href="/register">Register</a>
//                                     </p>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./Login.scss";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Use useNavigate hook for navigation

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password);
            // User logged in successfully
            console.log("User logged in");
            // Navigate to the home page
            navigate("/");
        } catch (error) {
            // Handle login errors
            console.error("Login error:", error);
        }
    };

    return (
        <div className="container-fluid login-container">
            <div className="row">
                <div className="col-md-10">
                    <div className={`wrapper`}>
                        <div className="form-box login">
                            <form onSubmit={handleLogin}>
                                <h1>Login</h1>
                                <div className="input-box">
                                    <input type="text" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                                    <i className="bi bi-envelope-fill email"></i>
                                </div>
                                <div className="input-box">
                                    <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                                    <i className="bi bi-lock-fill icon"></i>
                                </div>
                                <div className="remember-forgot">
                                    <label><input type="checkbox" />Remember me</label>
                                    <a href="#">Forgot Password</a>
                                </div>
                                <button className="loginbtn" type="submit">Login</button>
                                <div className="register-link text-center py-4">
                                    <p>Don't have an account?
                                    <a href="/register">Register</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
