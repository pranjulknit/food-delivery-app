import React from "react";

import "./Option.css";
import Text from "../../../common/Text/Text";


function Option({text}){

    return(
        <div className="option-container">
            <div className="option-text">
            <Text  text={text} variant="p1"/>

            </div>
            <p className="option-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iRDDBk"><title>chevron-down</title><path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg>
            </p>
        </div>
    );
}


export default  Option;