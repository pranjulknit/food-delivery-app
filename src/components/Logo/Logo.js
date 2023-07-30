import React from "react";
import "./Logo.css";
import Mini from "./Mini/Mini";
import india from "../../assets/india-flag-icon.png";
import chevron from "../../assets/down-arrow.png";
import web from "../../assets/web.png";




function Logo(){
    return(
        <div className="logo-container">
         <div className="zomato-logo">
           <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="zomato-logo"/> 
         </div>
        <div className="india-logo">
        <Mini frontlogo={india} text="India" icon={chevron}/>
         <Mini frontlogo={web} text="English" icon={chevron}/>
        </div>
      
        </div>
    );
}


export default Logo;