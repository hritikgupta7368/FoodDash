import React from "react";
import Card from "../card/card";

const Hero = ({ city }) => {
  const restaurantData = [
    {
      restaurant: "Tasty Tavern",
      rating: 4.6,
      category: "American",
      location: "Los Angeles",
    },
    {
      restaurant: "Spice Palace",
      rating: 4.2,
      category: "Indian",
      location: "Mumbai",
    },
    {
      restaurant: "Sushi Haven",
      rating: 4.8,
      category: "Japanese",
      location: "Tokyo",
    },
    {
      restaurant: "Cheesy Bites",
      rating: 4.5,
      category: "Pizza",
      location: "Rome",
    },
    {
      restaurant: "Burger Junction",
      rating: 4.3,
      category: "Burgers",
      location: "New York",
    },
    {
        restaurant: "Burger Junction",
        rating: 4.3,
        category: "Burgers",
        location: "New York",
      },
      {
        restaurant: "Tasty Tavern",
        rating: 4.6,
        category: "American",
        location: "Los Angeles",
      },
      {
        restaurant: "Spice Palace",
        rating: 4.2,
        category: "Indian",
        location: "Mumbai",
      },
      {
        restaurant: "Sushi Haven",
        rating: 4.8,
        category: "Japanese",
        location: "Tokyo",
      },
      {
        restaurant: "Cheesy Bites",
        rating: 4.5,
        category: "Pizza",
        location: "Rome",
      },
      {
        restaurant: "Burger Junction",
        rating: 4.3,
        category: "Burgers",
        location: "New York",
      },
      {
          restaurant: "Burger Junction",
          rating: 4.3,
          category: "Burgers",
          location: "New York",
        },
        {
            restaurant: "Sushi Haven",
            rating: 4.8,
            category: "Japanese",
            location: "Tokyo",
          },
          {
            restaurant: "Cheesy Bites",
            rating: 4.5,
            category: "Pizza",
            location: "Rome",
          },
          {
            restaurant: "Burger Junction",
            rating: 4.3,
            category: "Burgers",
            location: "New York",
          },
          {
              restaurant: "Burger Junction",
              rating: 4.3,
              category: "Burgers",
              location: "New York",
            },
    
  ];

  return (
    <div className="h-full w-full ">
      {/* <div className="">
        <h1>What's on your mind?</h1>
        <div>pagination + /-</div>
      </div> */}
      {/* <div>food category</div> */}
      {/* <h1>Top restaurant chains in {city}</h1> */}
      
       
        <div className="h-[450px] flex w-full  overflow-x-scroll  whitespace-nowrap bg-slate-300 ">
          {restaurantData.map((restaurant,index) => <Card restaurant={restaurant.restaurant} rating={restaurant.rating} category={restaurant.category} location={restaurant.location} />)}
      </div>
      <h1>Restaurants with online food delivery in {city}</h1>
      <div>
        all restaurant in that city with pagination if exceeding the limit with
        sorting mechanism
      </div>
    </div>
  );
};

export default Hero;
