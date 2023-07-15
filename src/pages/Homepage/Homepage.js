import React  from "react";
import  "./Homepage.css";
import FilterTypes from "../../components/Filtertypes/FilterType";
import Filterdishes from "../../components/Filterdishes/Filterdishes";
function Homepage(){
    return (
        <div>
         <FilterTypes/>
         <Filterdishes/>
        </div>
    );

}


export default Homepage;