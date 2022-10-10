import React from "react";
import Button from "./Button";
import "./Styles/Main.css";
import mainImage from "./../Pictures/girl.jpg";

const Main = () => {
  const mainBtn = "main-btn";
  return (
    <div className="main-container">
      <div className="text">
        <p>Delicious food for healthy life.</p>
        <p>We are best food maker, never be late for order.</p>
        <div className="btn-container">
          <Button className={mainBtn} text={"Order Now"} />
        </div>
      </div>
      <div className="main-img">
        <img src={mainImage} alt="girl" />
      </div>
    </div>
  );
};

export default Main;
