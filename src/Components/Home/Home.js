
import React from "react";
import "./Home.scss";
import Slider from "../Slider/Slider";
import FeaturedProduct from "../FeaturedProducts/FeaturedProduct";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <div className="home"> <Slider />
      <FeaturedProduct type="Featured" />
      <Categories />
      <FeaturedProduct type="Trending" />
    </div>
  )
};

export default Home;
