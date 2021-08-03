import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconHeaderNotUser from "./IconHeaderNotUser";
import SearchInputBuyers from "./SearchInputBuyers";
import "../styles/Header.css";

const HeaderBuyers = () => {
  return (
    <div className="header-parent-container">
      <div className="container-header-top">
        <div className="container-inside-cht">
          <Link to="/" className="link" style={{ color: "rgb(80, 80, 80)" }}>
            <p>About Dotstore</p>
          </Link>
          <Link to="/" className="link" style={{ color: "rgb(80, 80, 80)" }}>
            <p>Help</p>
          </Link>
          <Link to="/" className="link" style={{ color: "rgb(80, 80, 80)" }}>
            <p>Contact us</p>
          </Link>
        </div>
      </div>
      <div className="header-buyers-container">
        <div className="hb-left">
          <Link to="/" className="link">
            <div className="header-brand">
              Logo
            </div>
          </Link>
        </div>
        <div className="hb-center-2">
          <SearchInputBuyers />
        </div>
        <div className="hb-right-notuser">
          <IconHeaderNotUser />
        </div>
      </div>
    </div>
  );
};
export default HeaderBuyers;
