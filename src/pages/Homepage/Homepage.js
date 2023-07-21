import React  from "react";
import  "./Homepage.css";
import FilterTypes from "../../components/Filtertypes/FilterType";
import Filterdishes from "../../components/Filterdishes/Filterdishes";
import Filterbrands from"../../components/Filterbrands/Filterbrands";
import Restaurants from "../../components/Restaurants/Restaurants";
function Homepage(){
    return (
        <div>
         <FilterTypes/>
         <Filterdishes/>
         <Filterbrands/>
         <Restaurants/>
        </div>
    );

}


export default Homepage;