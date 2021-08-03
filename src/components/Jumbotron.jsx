import React, { useState } from "react";
import { Link } from "react-router-dom";
import jumbotronHome from ".././assets/jumbotron-home.png";
import "./styles/Jumbotron.css";

export default function Jumbotron() {
  return (
    <div>
      {/* <img src={jumbotronHome} alt="jumbotronHome" width="100%" height="100%" /> */}
      <Link to="/shop" className="link" style={{ color: "rgb(80, 80, 80)" }} >
        <div className="botton-jbt-shop">
          <p>Shop Now</p>
        </div>
      </Link>
    </div>
  );
}
