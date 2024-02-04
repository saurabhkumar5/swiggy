// import React from "react";
// import './Body.css'
// import Card from './Card'
// function Body() {
//   return (
//     <>
//     <div className="search-container">
//       <input 
//       type="text"
//       className="search-input"
//       placeholder="search"
//       value="hello"
//       onChange={(e)=>console.log(e.target.value)}
//       />
//       <button className="restaurant-list">search</button>

//     </div>
//     <div className="cards">
//         <Card name={"burger"} rating={"4.5"} para={"sector6"} img={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9"}/>
//         <Card name={"samosa"} rating={"4"} para={"sector61"}/>
//         <Card name={"rasgulla"} rating={"4.2"} para={"sector16"}/>
//         <Card name={"rasmalayi"} rating={"5"} para={"sector4"}/>
//         <Card name={"banarasi paan"} rating={"4.3"} para={"sector23"}/>
//         <Card name={"baati chokha"} rating={"4.9"} para={"sector56"}/>
//         <Card name={"plates"} rating={"5"} para={"sector41"}/>
//     </div>
//     </>
//   );
// }

// export default Body;


import React, { useEffect, useState } from "react";
import './Body.css'
import Card from './Card';

function Body() {
  const [searchTerm, setSearchTerm] = useState([]);
  // const [filteredCards, setFilteredCards] = useState([]);


  useEffect(()=>{
    getRestaurant()
  },[])

   async function getRestaurant(){
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667')
    const json = await data.json();
    console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setSearchTerm(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }

  // const cardsData = [
  //   { name: "burger", rating: "4.5", para: "sector6", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9" },
  //   { name: "jalebi", rating: "4.5", para: "sector6", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9" },
  //   { name: "gulabjamun", rating: "4.5", para: "sector6", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9" },
  //   { name: "petha", rating: "4.5", para: "sector6", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9" },
  //   { name: "aalu", rating: "4.5", para: "sector6", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9" },
  //   { name: "petha", rating: "4.5", para: "sector6", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9" },
  //   { name: "laddu", rating: "4.5", para: "sector6", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9" },
  //   { name: "halva", rating: "4.5", para: "sector6", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r1d87f1qiql6xbulfbt9" },
    
  //   // Add other card data here
  // ];

  // const handleSearch = () => {
  //   // Filter cards based on the search term
  //   const filteredResults = cardsData.filter(card =>
  //     card.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  //   // Update the state with filtered results
  //   setFilteredCards(filteredResults);
  // };

  return (
    <>
      {/* <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="restaurant-list" onClick={handleSearch}>
          Search
        </button>
      </div> */}
      {/* <div className="cards">
        {filteredCards.length > 0 ? (
          // Display filtered cards if there are search results
          filteredCards.map((card, index) => (
            <Card key={index} name={card.name} rating={card.rating} para={card.para} img={card.img} />
          ))
        ) : (
          // Display all cards if there are no search results
          searchTerm.map((card, index) => (
            // <Card key={index} name={card.name} rating={card.rating} para={card.para} img={card.img} />
            <Card key={card.info.id} resList={card}/>
           
           
          ))
        )}
      </div> */}


     <div className="cards">
     {
         searchTerm.map((card, index) => (
          
          <Card key={card.info.id} resList={card}/>
         )
         )
           }
     </div>
    </>
  );
}

export default Body;


