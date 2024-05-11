

// import React, { useState, useEffect } from "react";
// import "./Chat.scss";

// const Chat = ({ userName, userImage }) => { // Receive userName and userImage props
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         // Fetch users data from the backend
//         const fetchData = async () => {
//             try {
//                 // Example fetch call
//                 const response = await fetch('api_endpoint');
//                 const data = await response.json();
//                 setUsers(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className="container-fluid text-white bg-black">
//             <div className="row justify-content-center mx-5">
//                 <div className="col-md-3 bg-dark rounded my-5" style={{ height: "500px" }}>

//                     <div className="sticky-section bg-dark text-white d-flex bottomborder">
//                         <img style={{ height: "30px", width: "30px", borderRadius: "50%" }} src={userImage} alt={userName} /> {/* Use userImage prop */}
//                         <h5 className="mx-3">Messaging</h5>
//                     </div>

//                     <div className="row2">
//                         <div className="scrollable-section">
//                             {users.map(user => (
//                                 <div className="oneUser" key={user.id}>
//                                     <img className="" src={user.image} alt={user.name} /> {/* Use user.image */}
//                                     <h5 className="name text-white">{user.name}</h5> {/* Use user.name */}
//                                     <hr />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Chat;


import React, { useState, useEffect } from "react";
import "./Chat.scss";

const Chat = ({ userName, userImage }) => { // Receive userName and userImage props
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Simulate fetching user data
        const simulateFetchData = () => {
            // Simulated user data
            const simulatedData = [
                { id: 1, name: "User 1", image: "user1.jpg" },
                { id: 2, name: "User 2", image: "user2.jpg" },
                { id: 3, name: "User 3", image: "user3.jpg" }
                // Add more simulated users as needed
            ];
            setUsers(simulatedData);
        };

        simulateFetchData();
    }, []);

    return (
        <div className="container-fluid text-white bg-black">
            <div className="row justify-content-center mx-5">
                <div className="col-md-3 bg-dark rounded my-5" style={{ height: "500px" }}>

                    <div className="sticky-section bg-dark text-white d-flex bottomborder">
                        <img style={{ height: "30px", width: "30px", borderRadius: "50%" }} src={userImage} alt={userName} /> {/* Use userImage prop */}
                        <h5 className="mx-3">Messaging</h5>
                    </div>

                    <div className="row2">
                        <div className="scrollable-section">
                            {users.map(user => (
                                <div className="oneUser" key={user.id}>
                                    <img className="" src={user.image} alt={user.name} /> {/* Use user.image */}
                                    <h5 className="name text-white">{user.name}</h5> {/* Use user.name */}
                                    <hr />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
