import React from "react";

import "./Circularcard.css";
import Text from "../Text/Text";




function Circularcard({image,text,time,textVariant}){

    return (
        <div className="circular-card-container">
            <img className="circular-card-image" src={image} alt={text}/>
            <div className="circular-card-text-container">
                <Text text={text} variant = {textVariant}/>
                {time && <Text text={time}/>}
            </div>
        </div>
    );

}


export default Circularcard;