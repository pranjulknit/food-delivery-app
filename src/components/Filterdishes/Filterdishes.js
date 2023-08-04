import React from "react";

import "./Filterdishes.css";

// import Dishes from"./Dishes/Dishes";
import {DishesData} from "./constants";
import Circularcard from "../../common/Circularcard/Circularcard";

import Text from "../../common/Text/Text";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Filterdishes(){
    const location = useLocation();
    const pathName = location.pathname;
    const cityName = pathName.split("/")[1];
    const navigate = useNavigate();
    const goToRestaurants = (cityName)=>{
         navigate(`/${cityName}/restaurant`);
    }
    return (
        <div className="filter-dishes">
            < Text text="Inspiration for your first order" variant="h1"/>
            {/* <p className="filter-dishes-header">Inspiration for your first order</p> */}
            <div className="filter-dishes-dishes">
               {DishesData.map((value)=>(
                  <Circularcard image={value.image} text={value.text} textVariant="h3" handleClick={goToRestaurants}/>
               ))}
            </div>
        </div>
    );
}


export default Filterdishes;