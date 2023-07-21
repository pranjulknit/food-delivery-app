import React from "react";
import "./Restaurant.css";



function Restaurant(props){

    return(
       <div className="rest-container">
        <div className="rest-image">
          <img className="rest-image-image" src={props.image} alt="restaurant"/>
        </div>
        <div className="rest-content">
        <div className="rest-kitchen">
           <p className="rest-kitchen-name">{props.name}</p>
           <p className="rest-kitchen-location">{props.location.length>25? props.location.slice()+"...":props.location}</p>

        </div>
        <div className="rest-price">
          <p className="rest-rating">{props.rating}</p>
          <p className="rest-price-price">&#8377;{props.price} for one</p>
          <p className="rest-price-time">{props.time}</p>
        </div>
        </div>
       </div>
    );
}

export default Restaurant;