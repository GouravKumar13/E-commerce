import React from "react";
import "./footer.scss";


function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, deserunt eaque? Ducimus ipsum praesentium porro hic impedit minima dolore? Commodi modi ad facere pariatur ratione? </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, deserunt eaque? Ducimus ipsum praesentium porro hic impedit minima dolore? Commodi modi ad facere pariatur ratione?</span>
        </div>

      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">Gogostore</div>
          <div className="copyright">©️ Copyright 2023, All rights Reserved</div>
        </div>
        <div className="right">
          <img src="./images/payment.png" alt="" />
        </div>
      </div>
    </div>)
}

export default Footer;
