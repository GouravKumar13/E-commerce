
import React from "react";
import "./Home.scss";
import Slider from "../Slider/Slider";
import FeaturedProduct from "../FeaturedProducts/FeaturedProduct";

const Home = () => {
  return (
    <div className="home"> <Slider />
      <FeaturedProduct type="Featured" />
      <FeaturedProduct type="Trending" />
    </div>
  )
};

export default Home;
