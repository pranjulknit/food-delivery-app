import React from "react";

import "./Restaurant.css";

import Text from "../../common/Text/Text";
import {
  restaurantData
} from "./constant";
import Restaurant from "./restaurant/Restaurant";

function Restaurants({
  title
}) {
  return ( <
    div className = "rests-container" >
    <
    Text text = {
      title
    }
    variant = "h1" / >
    <
    div className = "rests-restaurant" > {
      restaurantData.map((value) => ( <
        Restaurant image = {
          value.image
        }
        name = {
          value.name
        }
        location = {
          value.location
        }
        rating = {
          value.rating
        }
        price = {
          value.price
        }
        time = {
          value.time
        }
        safety = {
          value.safety
        }
        />
      ))
    } <
    /div>


    <
    /div>

  );

}

export default Restaurants;