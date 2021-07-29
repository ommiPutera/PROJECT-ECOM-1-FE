import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconHeaderBuyers from "./IconHeaderBuyers";
import SearchInputBuyers from "./SearchInputBuyers";
import "../styles/HeaderBuyers.css";

const HeaderBuyers = () => {
  return (
    <div className="header-buyers-container">
      <div className="hb-left">
        <Link to="/" className="link">
          Logo
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
