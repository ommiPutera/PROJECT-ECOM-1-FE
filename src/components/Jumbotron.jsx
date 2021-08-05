import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Jumbotron.css";
import jumbotroneHome from "../assets/jumbotron-home.png";

export default function Jumbotron() {
  return (
    <div>
      <div className="jumbotron-container">
        <img
          src={jumbotroneHome}
          alt="jumbotroneHome"
          width="100%"
          height="100%"
        />
        <Link to="/shop" className="link" style={{ color: "rgb(80, 80, 80)" }}>
          <div className="botton-jbt-shop">
            <p>SHOP NOW</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
