import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const { getTotalCartItems } = useContext(ShopContext);

  const menuRef = useRef();
  const nav_dropdownRef = useRef();

  const dropdown_toggle = () => {
    menuRef.current.classList.toggle("nav-menu-visible");
    nav_dropdownRef.current.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} />
        <p>SHOPPER</p>
      </div>
      <div
        className="nav-dropdown"
        onClick={dropdown_toggle}
        ref={nav_dropdownRef}
      >
        <IoIosArrowDropdown />
      </div>
      <ul className="nav-menu" ref={menuRef}>
        <li
          onClick={() => {
            setMenu("Shop");
          }}
        >
          <Link to={"/"} style={{ textDecoration: "none" }}>
            Shop
          </Link>
          {menu === "Shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Men");
          }}
        >
          <Link to={"/men"} style={{ textDecoration: "none" }}>
            Men
          </Link>
          {menu === "Men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Women");
          }}
        >
          <Link to={"/women"} style={{ textDecoration: "none" }}>
            Women
          </Link>
          {menu === "Women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Kids");
          }}
        >
          <Link to={"/kids"} style={{ textDecoration: "none" }}>
            Kids
          </Link>
          {menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <button>Login</button>
          </Link>
        )}
        <Link to={"/cart"} style={{ textDecoration: "none" }}>
          <img src={cart_icon} />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
