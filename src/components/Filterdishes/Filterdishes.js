import React from "react";

import "./Filterdishes.css";

import Dishes from"./Dishes/Dishes";
import {DishesData} from "./constants";
function Filterdishes(){
    return (
        <div className="filter-dishes">
            <p className="filter-dishes-header">Inspiration for your first order</p>
            <div className="filter-dishes-dishes">
               {DishesData.map((value)=>(
                  <Dishes img={value.image} text={value.text}/>
               ))}
            </div>
        </div>
    );
}


export default Filterdishes;