// import "./Gigcards.scss";
// import React, { useState } from "react";
// import Perticulargigcard from "./Perticulargigcard";

// const Gigcards = () => {
//     const [active, setActive] = useState(false);
//     const [sort, setSort] = useState("sales");

//     const reSort = (type) => {
//         setSort(type);
//         setActive(false);
//     };

//     const handleClick = () => {
//         setActive(!active);
//     };

//     return (
//         <div>
//             <div className="row pt-4 mt-5 mx-3">
//                 <div className="col-md-12">
//                     <h1>AI Artists</h1>
//                 </div>
//             </div>
//             <div className="row pt-4 mt-3 justify-content-between">
//                 <div className="col-md-7 mx-3">
//                     <div className="filterBudget d-flex">
//                         <h4>Budget</h4>
//                         <div className="input">
//                             <input type="number" placeholder="min" />
//                             <input type="number" placeholder="max" />
//                         </div>
//                         <button className="applyfilter">Apply</button>
//                     </div>
//                 </div>
//                 <div className="col-md-3 text-white d-flex sortby">
//                     <p>Sort by</p>
//                     <p className="newest">{sort === "sales" ? "Best Selling" : "Newest"}</p>
//                     <i className="bi bi-caret-down-fill" onClick={handleClick}></i>
//                     {active && (
//                         <div className="menu d-flex flex-column">
//                             {sort === "sales" ? (
//                                 <span onClick={() => reSort("CreatedAt")}>Newest</span>
//                             ) : (
//                                 <span onClick={() => reSort("sales")}>Best Selling</span>
//                             )}
//                         </div>
//                     )}
//                 </div>
//             </div>
            
//         </div>
//     );
// };

// export default Gigcards;
