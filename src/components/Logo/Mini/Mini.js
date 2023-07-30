import React from "react";
import "./Mini.css";




function Mini({frontlogo,text,icon}){

    return(
        <div className="mini-container">
          <img className="frontlogo" src={frontlogo} alt="frontlogo"/>
            
         
         <p className="mini-text">
            {text}

         </p>
         <img className="icon" src={icon} alt="icon"/>
        </div>
    );
}



export default Mini;