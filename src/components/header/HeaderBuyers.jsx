import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconHeaderBuyers from "./IconHeaderBuyers";
import SearchInputBuyers from "./SearchInputBuyers";
import "../styles/Header.css";

const HeaderBuyers = () => {
  return (
    <div className="header-parent-container">
      <div className="container-header-top">
        <div className="container-inside-cht">
          <Link to="/" className="link" style={{ color: "#C4C4C4" }}>
            <p>About</p>
          </Link>
          <Link to="/" className="link" style={{ color: "#C4C4C4" }}>
            <p>Help</p>
          </Link>
          <Link to="/" className="link" style={{ color: "#C4C4C4" }}>
            <p>Contact us</p>
          </Link>
        </div>
      </div>
      <div className="parent-header-container">
        <div className="header-buyers-container">
          <div className="hb-left">
            <Link to="/" className="link">
              <div className="header-brand">Logo</div>
            </Link>
          </div>
          <div className="hb-center">
            <SearchInputBuyers />
          </div>
          <div className="hb-right">
            <IconHeaderBuyers />
          </div>
        </div>
        <div>
          oHellop
        </div>
      </div>
    </div>
  );
};
export default HeaderBuyers;
