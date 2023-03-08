import { useState, React } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";


function NavBar() {
  const [open, setopen] = useState(false)
  return (
    <div className="navbar">
      <div className="wrapper">
        {/* left part of navbar  */}
        <div className="left">
          <div className="item">
            <img src="/images/en.png" alt="india logo" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">children</Link>
          </div>
        </div>
        {/* center part of navbar  */}

        <div className="center">
          <Link className="link" to="./">GOGOSTORE</Link>
        </div >
        {/* right part of navbar  */}

        < div className="right" >
          <div className="item">
            <Link className="link" to=" /">Homepage</Link>
          </div > <div className="item">
            <Link className="link" to=" /">About</Link>
          </div > <div className="item">
            <Link className="link" to=" /">Contact</Link>
          </div > <div className="item">
            <Link className="link" to=" /">Stores</Link>
          </div >
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderIcon />
            <div className="cartIcon" onClick={() => setopen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>


            </div>
          </div>
        </div >
      </div >
      {open && <Cart />}
    </div >
  );
}

export default NavBar;
