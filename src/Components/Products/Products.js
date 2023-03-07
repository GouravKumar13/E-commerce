
import React from "react";
import "./Products.scss";
import List from '../List/List';
import { useParams } from "react-router-dom";
import { useState } from "react";

function Products() {
  // we have converter the param into a int as it was a string earlier 
  const CategoriesId = parseInt(useParams().Id)
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null)


  return (<div className="products">
    <div className="left-section">
      <div className="filterItem">
        <h2>Product Categories</h2>
        <div className="inputItem">

          <input id="hat" type="checkbox" />
          <label htmlFor="hat">Hat</label>

        </div>
        <div className="inputItem">

          <input id="t-shirt" type="checkbox" />
          <label htmlFor="t-shirt">t-shirt</label>
        </div>
        <div className="inputItem">

          <input id="Shoes" type="checkbox" />
          <label htmlFor="Shoes">Shoes</label>
        </div>
        <div className="inputItem">

          <input id="Skirts" type="checkbox" />
          <label htmlFor="Skirts">Skirts</label>
        </div>

      </div>
      <div className="filterItem">
        <h2>Filter by price</h2>
        <div className="inputItem">
          <span>0</span>
          <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
          <span>{maxPrice}</span>
        </div>
      </div>
      <div className="filterItem">
        <h2>Sort by</h2>
        <div className="inputItem">

          <input type="Radio" id="asc" value="asc" name='price' onChange={(e => setSort("asc"))} />
          <label htmlFor="asc">Price(Lowest First)</label>

        </div>
        <div className="inputItem">

          <input type="Radio" id="desc" value="desc" name='price' onChange={(e => setSort("desc"))} />
          <label htmlFor="desc">Price(Highest First)</label>
        </div>
      </div>
    </div>
    <div className="right-section">

      <img className="catimg" src="https://images.unsplash.com/photo-1523950704592-ee4866469b4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />

      <List maxPrice={maxPrice} CategoriesId={CategoriesId} sort={sort} />

    </div>
  </div >)
}

export default Products;
