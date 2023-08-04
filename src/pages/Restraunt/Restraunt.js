import React from "react";
import Restaurants from "../../components/Restaurants/Restaurants";
import FilterTypes from "../../components/Filtertypes/FilterType";
import { useLocation } from "react-router-dom";

function Restraunt(){
    const location = useLocation();
    const pathName = location.pathname;
    const cityName = pathName.split("/")[1];
   return (
    <div>
        <FilterTypes/>
        <Restaurants title={`${cityName} Restaurants`}/>
    </div>
   );
}



export default Restraunt;