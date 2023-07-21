import React from "react";

import "./Brand.css";


function Brand({img,text,time}){

return (
    <div className="brand-container">
        <img   className="brand-image" src={img} alt="brand"/>
        <div className="brand-content">
        <p className="brand-paragraph">{text}</p>
        <p className="brand-time">{time}</p>
        </div>
        
    </div>
);

}


export default Brand;