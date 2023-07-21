import React from "react";

import Brand from "./Brand/Brand";
import "./Filterbrands.css";

import { BrandsData } from "./constants";

function Filterbrands(){
      return (
        <div className="filter-brands">
            <p className="filter-brands-header">
            Top brands for you
            </p>
            <div className="filter-brands-brands">
             { BrandsData.map((value)=>(
                <Brand img={value.image} text={value.text} time={value.time}/>
             ))
             }

            </div>
        </div>
      );

}


export default Filterbrands;