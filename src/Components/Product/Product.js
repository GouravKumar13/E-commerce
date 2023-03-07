import React from "react";
import "./Product.scss";
import { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

function Product() {
  const [SelectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://images.unsplash.com/photo-1593936680439-5be01719b1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1592240017316-c351f862580d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

  ]
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImages">
          <img src={images[SelectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est illum repudiandae nostrum hic necessitatibus itaque, expedita similique, non ad, ut dolores pariatur vitae ex eveniet. Repellat dolores velit animi aliquid molestias hic?</p>
        <div className="quantity">
          <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
          {quantity}
          <button onClick={(e) => setQuantity(prev => prev + 1)}>+</button>
        </div>

        <button className="add"><AddShoppingCartIcon />ADD TO CART</button>
        <div className="link">
          <div className="item"><BalanceIcon />ADD TO WISH LIST</div>
          <div className="item"><FavoriteBorderIcon /> ADD TO COMPAIR</div>
        </div>
        <div className="info">
          <span>vendor: polo</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: T-shirt ,unisex,top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />

          <span>ADDITIONAL INFORMATION</span>
          <hr />

          <span>FAQ</span>
        </div>
      </div>
    </div>);
}

export default Product;
