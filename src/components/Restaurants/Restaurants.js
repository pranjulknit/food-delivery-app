import React from "react";

import "./Restaurant.css";

import Restaurant from "./restaurant/Restaurant";

function Restaurants(){
    return(
     <div className="rests-container">
             <p className="rests-header"> Restaurants Near By You.</p>
             <Restaurant image="https://b.zmtcdn.com/data/pictures/1/19535121/6acac0ca735dea436160502c3f115946_o2_featured_v2.jpg?output-format=webp" name="Cheatan's Kitchen" location="North Indian, Fast Food Corner" rating="4.2" price="150" time="25 min" safety="true"/>

     </div>

    );

}

export default Restaurants;