import React from "react";
import './Body.css'
import Card from './Card'
function Body() {
  return (
    <>
    <div className="search-container">
      <input 
      type="text"
      className="search-input"
      placeholder="search"
      value="hello"
      onChange={(e)=>console.log(e.target.value)}
      />
      <button className="restaurant-list">search</button>

    </div>
    <div className="cards">
        <Card name={"burger"} rating={"4.5"} para={"sector6"} img={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9"}/>
        <Card name={"samosa"} rating={"4"} para={"sector61"}/>
        <Card name={"rasgulla"} rating={"4.2"} para={"sector16"}/>
        <Card name={"rasmalayi"} rating={"5"} para={"sector4"}/>
        <Card name={"banarasi paan"} rating={"4.3"} para={"sector23"}/>
        <Card name={"baati chokha"} rating={"4.9"} para={"sector56"}/>
        <Card name={"plates"} rating={"5"} para={"sector41"}/>
    </div>
    </>
  );
}

export default Body;
