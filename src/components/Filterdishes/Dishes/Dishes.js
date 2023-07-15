import React from "react";

import "./Dishes.css";


function Dishes({img,text}){

return (
    <div className="dishes-container">
        <img   className="dishes-image" src={img} alt="dishes"/>
        <p className="dishes-paragraph">{text}</p>
    </div>
);

}


export default Dishes;