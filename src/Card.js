import React from 'react'
import './Card.css'
function Card({name,rating,para}) {
  return (
   
    <div className="card">
      
      <img  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f596863116da4b4688b48e813e25000d" />
      <h2>{name}</h2>
      <h3>{rating} stars</h3>
      <p>{para}</p>
    
     
    </div>
  )
}

export default Card