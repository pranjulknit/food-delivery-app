import React from "react";
import "./Restaurant.css";



function Restaurant(props){

    return(
       <div className="rest-container">
        <div className="rest-image">
          <img className="rest-image-image" src={props.image} alt="restaurant"/>
          <p className="rest-image-text"> 50% OFF up to 100</p>
        </div>
       
        <div className="rest-kitchen">
          
           <div className="rest-kitchen-name-rating">
           <p className="rest-kitchen-name">{props.name}</p>
           <p className="rest-rating">{props.rating}
          <span class="fa fa-star"></span>          </p>
           </div>
           <div className="rest-kitchen-location-price">
           <p className="rest-kitchen-location">{props.location.length>25? props.location.slice()+"...":props.location}</p>
          <div className="rest-kitchen-price-time">
           <p className="rest-price-price">&#8377;{props.price} for one</p>
           <p className="rest-price-time">{props.time}</p>
           </div>
           </div>
           <div className="rest-max-safety">
            <div className="rest-max-safety-border"></div>
            <div className="rest-max-safety-image-text">
           <img className="rest-max-safety-image"src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" alt="max-safety"/>
           <p className="rest-max-safety-text">Follows all Max Safety measures to ensure your food is safe</p>
           </div>
           </div>
        </div>
        
          
          
          
       
       
       </div>
    );
}

export default Restaurant;