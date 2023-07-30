import React from "react";

import "./Options.css";
import Text from "../../common/Text/Text";
import Option from  "../Options/Option/Option";


function Options(){

    return (
        <div className="options-container">
          <Text text="Explore options near me" variant="h1"/>
          <div className="options-options">
            <Option text="Popular cuisines near me"/>
            <Option text="Popular restaurant types near me"/>
            <Option text="Cities We Deliver To"/>
          </div>
        </div>
    );
}


export default Options;