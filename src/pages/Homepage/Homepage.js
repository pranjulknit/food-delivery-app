import React  from "react";
import  "./Homepage.css";
import FilterTypes from "../../components/Filtertypes/FilterType";
import Filterdishes from "../../components/Filterdishes/Filterdishes";
import Filterbrands from"../../components/Filterbrands/Filterbrands";
import Restaurants from "../../components/Restaurants/Restaurants";
import Options from "../../components/Options/Options";
import { useLocation } from "react-router-dom";



function Homepage(){
    const location = useLocation();
    const pathName = location.pathname;
    const cityName = pathName.split("/")[1];
    return (
   
        <div>
         <FilterTypes/>
         <Filterdishes/>
         <Filterbrands/>
         <Restaurants title={`Best Restaurants in ${cityName}`}/>
         <Options/>
        </div>
    );

}


export default Homepage;