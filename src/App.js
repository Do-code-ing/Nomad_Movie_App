import React from "react";

function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt="" width="500" height="auto"/>
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://kelliesfoodtoglow.com/wp-content/uploads/2016/10/kimchi1.jpg",
  },
  {
    name: "Samgyeopsal",
    image: "https://www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg",
  },
  {
    name: "Bibimbap",
    image: "https://simplycook.imgix.net/recipes/Bibimbap-_720x480.jpg?dpr=1&fit=crop&fm=jpg&h=1000&ixlib=php-1.0.6&lossless=0&q=50&w=1200&s=683b3a92e878ee9cdb83e0ed1a98597c",
  },
  {
    name: "Donkatsu",
    image: "https://c1.staticflickr.com/5/4080/4804146646_24fcf5030b_b.jpg",
  },
  {
    name: "Kimbap",
    image: "https://s3-media4.fl.yelpcdn.com/bphoto/GBzgm6dA1tiLxBztJRXxgA/o.jpg",
  },
];

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (<Food name={dish.name} picture={dish.image}/>))}
    </div>
  );
}

export default App;
