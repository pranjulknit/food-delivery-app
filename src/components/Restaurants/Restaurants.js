import React from "react";

import "./Restaurant.css";

import Restaurant from "./restaurant/Restaurant";
import { restaurantData } from "./constant";
function Restaurants(){
    return(
     <div className="rests-container">
             <p className="rests-header"> Restaurants Near By You.</p>
             <div className="rests-restaurant">
              {
              restaurantData.map((value)=>(
                <Restaurant image={value.image} name={value.name} location={value.location} rating={value.rating} price={value.price} time={value.time} safety = {value.safety}/>
              ))
              }
              </div>
             

     </div>

    );

}

export default Restaurants;