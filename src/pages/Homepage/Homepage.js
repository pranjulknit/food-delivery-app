import React  from "react";
import  "./Homepage.css";
import FilterTypes from "../../components/Filtertypes/FilterType";
import Filterdishes from "../../components/Filterdishes/Filterdishes";
import Filterbrands from"../../components/Filterbrands/Filterbrands";
import Restaurants from "../../components/Restaurants/Restaurants";
import Options from "../../components/Options/Options";
function Homepage(){
    return (
        <div>
         <FilterTypes/>
         <Filterdishes/>
         <Filterbrands/>
         <Restaurants/>
         <Options/>
        </div>
    );

}


export default Homepage;