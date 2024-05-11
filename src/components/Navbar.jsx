// // import React, { useEffect, useState } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import "./Navbar.scss";
// // import pp from "./bg.jpg"

// // const Navbar = () => {
   
// //     const [active,setActive]=useState(false);
// //     const [open,setOpen] = useState(false)
     
// //     const{pathname}=useLocation();
// //     const isActive=()=>{
// //         window.scroll >0 ? setActive(true):setActive(false);
// //     }
// //     useEffect(()=>{
// //         window.addEventListener("scroll",isActive);
// //         return()=>{
// //             window.removeEventListener("scroll",isActive);
// //         }
// //     },[]);


// //     const currentUser={
// //         id:1,
// //         userName:"Aman",
// //         isSeller:true
// //     }

// //   return (
// //     <div className={active || pathname!=="/"? "navbar active":"navbar"}>
// //       <div className="container">
// //         <div className="logo">
// //            <Link to="/" className="link"> 
// //           <span className="skill">Skill</span>
// //           <span className="bridge">Bridge</span>
// //            </Link> 
// //         </div>
// //         <div className="links">
// //           <span>Explore</span>
// //           <span>English</span>
// //           <span>Sign in</span>
          
// //           {!currentUser && <button>join</button>}
// //           {currentUser && (
// //             <div className="user" onClick={()=> setOpen(!open)}>
// //                 <img src={pp} alt="" />
// //                 <span>{currentUser?.userName}</span>
                
// //                 {
// //                     open && 
// //                         <div className="options">
                    
// //                     <Link className="link" to="/orders">My Profile</Link>
// //                     <Link className="link" to="/logout">Logout</Link>
// //                 </div>
                    
// //                 }
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //       {
// //        ( active || pathname!=='/')&& (
// //             <>
// //             <hr />
// //                 <div className="menu">
// //                   <Link className="link menuLink">Graphics & Design</Link>
// //                   <Link className="link menuLink">Video & Animation</Link>
// //                   <Link className="link menuLink">Writing & Translation</Link>
// //                   <Link className="link menuLink">AI Services</Link>
// //                   <Link className="link menuLink">Digital Marketing</Link>
// //                 </div>
// //             </>
// //         )
// //       }
// //     </div>
// //   );
// // };

// // export default Navbar;


// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "./Navbar.scss";
// import pp from "./bg.jpg";

// const Navbar = () => {
//   const [active, setActive] = useState(false);
//   const [open, setOpen] = useState(false);
//   const { pathname } = useLocation();

//   const isActive = () => {
//     window.scroll > 0 ? setActive(true) : setActive(false);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", isActive);
//     return () => {
//       window.removeEventListener("scroll", isActive);
//     };
//   }, []);

//   const currentUser = {
//     id: 1,
//     userName: "Aman",
//     isSeller: true,
//   };

//   return (
//     <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
//       <div className="container">
//         <div className="logo">
//           <Link to="/" className="link">
//             <span className="skill">Skill</span>
//             <span className="bridge">Bridge</span>
//           </Link>
//         </div>
//         <div className="links">
//           <span>Explore</span>
//           <span>English</span>
//           <span>Sign in</span>

//           {!currentUser && <button>Join</button>}
//           {currentUser && (
//             <div className="user" onClick={() => setOpen(!open)}>
//               <img src={pp} alt="" />
//               <span>{currentUser?.userName}</span>
//               {open && (
//                 <div className="options">
//                   <Link to="/freelancerdashboard" className="link" >
//                     My Profile
//                   </Link>
//                   <Link className="link" to="/">
//                     Logout
//                   </Link>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default Navbar;





import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import pp from "./bg.jpg";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scroll > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  useEffect(() => {
    // Check if user is logged in (you can replace this with your authentication logic)
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    // Perform logout logic and update state accordingly
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <div className={active || pathname !== "/s" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="skill">Skill</span>
            <span className="bridge">Bridge</span>
          </Link>
        </div>
        <div className="links">
          {!currentUser ? (
            <>
            <Link className="link">Active Jobs</Link>
          <Link to="/findjobs" className="link">Find Jobs</Link>
            <Link to="/" className="link">
                Home
              </Link>
              <Link to="/login" className="link">
                Sign in
              </Link>
              <Link to="/register" className="link">
              <button className="navbtn">Join</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/find-job" className="link">
                Find Job
              </Link>
              <div className="user" onClick={() => setOpen(!open)}>
                <img src={pp} alt="" />
                <span>{currentUser?.userName}</span>
                <div className="options">
                  <Link className="link" to="/freelancerdashboard">
                    My Profile
                  </Link>
                  <button className="link" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;




// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "./Navbar.scss";
// import pp from "./bg.jpg";

// const Navbar = () => {
//   const [active, setActive] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [open, setOpen] = useState(false);
//   const { pathname } = useLocation();

//   const isActive = () => {
//     window.scrollY > 0 ? setActive(true) : setActive(false);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", isActive);
//     return () => {
//       window.removeEventListener("scroll", isActive);
//     };
//   }, []);

//   useEffect(() => {
//     // Check if user is logged in (you can replace this with your authentication logic)
//     const user = localStorage.getItem("currentUser");
//     if (user) {
//       setCurrentUser(JSON.parse(user));
//     }
//   }, []);

//   const handleLogout = () => {
//     // Perform logout logic and update state accordingly
//     localStorage.removeItem("currentUser");
//     setCurrentUser(null);
//   };

//   return (
//     <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
//       <div className="container">
//         <div className="logo">
//           <Link className="link" to="/">
//             <span className="skill">Skill</span>
//             <span className="bridge">Bridge</span>
//           </Link>
//         </div>
//         <div className="links">
//           {currentUser ? (
//             <>
//               <Link to="/find-job" className="link">
//                 Find Job

//               </Link>
//               <div className="user" onClick={() => setOpen(!open)}>
//                 <img src={pp} alt="" />
//                 <span>{currentUser?.userName}</span>
//                 <div className="options">
//                   <Link className="link" to="/freelancerdashboard">
//                     My Profile
//                   </Link>
//                   <button className="link" onClick={handleLogout}>
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             </>
//           ) : (
//             <>
//               <span>Home</span>
//               <span>Active Jobs</span>
//               <span>Find Jobs</span>
              
//               <Link className="link" to="/login">
//                 Login
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
