import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconHeaderBuyers from "./IconHeaderBuyers";
import SearchInputBuyers from "./SearchInputBuyers";
import "../styles/Header.css";

const HeaderBuyers = () => {
  return (
    <div className="header-buyers-container">
      <div className="hb-left">
        <Link to="/" className="link">
          <div className="header-brand">
            Fournir<span className="dot-header">.</span>
          </div>
        </Link>
      </div>
      <div className="hb-center">
        <SearchInputBuyers />
      </div>
      <div className="hb-right">
        <IconHeaderBuyers />
      </div>
    </div>
  );
};
export default HeaderBuyers;
