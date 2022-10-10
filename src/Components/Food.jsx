import React from "react";
import Button from "./Button";
import "./Styles/Food.css";
const Food = (props) => {
  const addToCartBtn = "add-to-cart-btn";
  const minus_add = "minus-add";
  return (
    <div className="food-wrapper">
      <div className="main-food-container">
        <div className="food-container">
          <div className="food-img">
            <img src={props.imgSrc} alt="" />
          </div>
          <div className="food-name">
            <p>{props.foodName}</p>
          </div>
          <div className="food-price">
            <p>${props.foodPrice}</p>
          </div>
          <div className="food-counter">
            <Button className={minus_add} text={"-"} />
            <p>1</p>
            <Button className={minus_add} text={"+"} />
          </div>
          <Button className={addToCartBtn} text={"Add to Cart"} />
        </div>
      </div>
    </div>
  );
};

export default Food;
