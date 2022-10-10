import React from "react";
import Button from "./Button";
import {
  BsFillBasketFill,
  BsSearch,
  BsGlobe,
  BsHouseDoor,
  BsTelephone,
  BsLayoutTextSidebar,
  BsGear,
} from "react-icons/bs";
import "./Styles/Navbar.css";

const Navbar = () => {
  const signUp = "sign-up";
  const signIn = "sign-in";

  return (
    <div className="navbar-wrapper">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <div className="brand">Brand</div>
      <ul className="menu__box">
        <li>
          <a className="menu__item selected" href="#">
            <BsHouseDoor className="menu__item-icon" />
            Home
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            <BsLayoutTextSidebar className="menu__item-icon" />
            Menu
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            <BsGear className="menu__item-icon" />
            Services
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            <BsGlobe className="menu__item-icon" />
            Blog
          </a>
        </li>
        <li>
          <a className="menu__item" href="#">
            <BsTelephone className="menu__item-icon" />
            Contact
          </a>
        </li>
      </ul>
      <div className="search-container">
        <BsSearch className="search" />
      </div>
      <div className="basket-container">
        <BsFillBasketFill className="basket" />
      </div>
      <div className="sign-in-up">
        <Button className={signIn} text={"Sign in"} />
        <Button className={signUp} text={"Sign up"} />
      </div>
    </div>
  );
};

export default Navbar;
