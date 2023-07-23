import React from "react";

// import Brand from "./Brand/Brand";
import "./Filterbrands.css";

import { BrandsData } from "./constants";
import Text from "../../common/Text/Text";
import Circularcard from "../../common/Circularcard/Circularcard";
function Filterbrands(){
      return (
        <div className="filter-brands">
          <Text  text="Top brands for you" variant="h1"/>
            {/* <p className="filter-brands-header">
            Top brands for you
            </p> */}
            <div className="filter-brands-brands">
             { BrandsData.map((value)=>(
                <Circularcard image={value.image} text={value.text} textVariant="h3" time={value.time}/>
             ))
             }

            </div>
        </div>
      );

}


export default Filterbrands;