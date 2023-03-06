
import React from "react";
import "./Home.scss";
import Slider from "../Slider/Slider";
import FeaturedProduct from "../FeaturedProducts/FeaturedProduct";
import Categories from "../Categories/Categories";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="home"> <Slider />
      <FeaturedProduct type="Featured" />
      <Categories />
      <FeaturedProduct type="Trending" />
      <Contact />
    </div>
  )
};

export default Home;
