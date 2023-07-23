import React from "react";

import "./Filterdishes.css";

// import Dishes from"./Dishes/Dishes";
import {DishesData} from "./constants";
import Circularcard from "../../common/Circularcard/Circularcard";

import Text from "../../common/Text/Text";
function Filterdishes(){
    return (
        <div className="filter-dishes">
            < Text text="Inspiration for your first order" variant="h1"/>
            {/* <p className="filter-dishes-header">Inspiration for your first order</p> */}
            <div className="filter-dishes-dishes">
               {DishesData.map((value)=>(
                  <Circularcard image={value.image} text={value.text} textVariant="h3"/>
               ))}
            </div>
        </div>
    );
}


export default Filterdishes;