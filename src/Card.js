import React from 'react'
import './Card.css'
function Card(props) {
  const CDN_URL="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  const {resList} = props;
  const {  cloudinaryImageId, cuisines, totalRatings, deliveryTime, name, avgRating } = resList?.info;
  return (
   
    <div className="card">
      
      {/* <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f596863116da4b4688b48e813e25000d" /> */}
      {/* <img  src={img}/>
      <h2>{name}</h2>
      <h3>{rating} stars</h3>
      <p>{para}</p> */}
      <img 
            className="resImg"
            alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <p>{cuisines}</p>
            <p>{totalRatings} STARS</p>
            <p>Time to deliver: {avgRating} </p>
    
     
    </div>
  )
}

export default Card