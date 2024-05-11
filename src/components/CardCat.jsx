import React from "react";
import "./Cardat.scss";
import { Link } from "react-router-dom";
const CardCat=({item})=>{
    return(
       <Link to="/gigs?cat=design">
           <div className="CatCard">
            <img src={item.img} alt="" />
            <span className="desc">{item.desc}</span>
            <span className="title">{item.title}</span>
            </div>
           
       </Link>
    )
}

export default CardCat;