import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://kelliesfoodtoglow.com/wp-content/uploads/2016/10/kimchi1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "https://simplycook.imgix.net/recipes/Bibimbap-_720x480.jpg?dpr=1&fit=crop&fm=jpg&h=1000&ixlib=php-1.0.6&lossless=0&q=50&w=1200&s=683b3a92e878ee9cdb83e0ed1a98597c",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Donkatsu",
    image: "https://c1.staticflickr.com/5/4080/4804146646_24fcf5030b_b.jpg",
    rating: 5.5,
  },
  {
    id: 5,
    name: "Kimbap",
    image: "https://s3-media4.fl.yelpcdn.com/bphoto/GBzgm6dA1tiLxBztJRXxgA/o.jpg",
    rating: 4.7,
  },
];

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} width="500" height="auto"/>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

function App() {
  return (
    <div className="App">
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
        ))}
    </div>
  );
}

export default App;
