import React from "react";

import "./Filterdishes.css";

import Dishes from"./Dishes/Dishes";

function Filterdishes(){
    return (
        <div className="filter-dishes">
            <p className="filter-dishes-header">Inspiration for your first order</p>
            <div className="filter-dishes-dishes">
            <Dishes img="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" text="Pizza"/>
            <Dishes img="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png" text="Biryani"/>
            <Dishes img="https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png" text="Thali"/>
            <Dishes img="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png" text="Chicken"/>
            <Dishes img="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" text="Burger" />
            <Dishes img="https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png" text="Fried Rice"/>
            </div>
        </div>
    );
}


export default Filterdishes;