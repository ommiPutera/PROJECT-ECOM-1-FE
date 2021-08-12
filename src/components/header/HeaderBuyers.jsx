import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconHeaderBuyers from "./IconHeaderBuyers";
import SearchInputBuyers from "./SearchInputBuyers";
import "../styles/Header.css";

const HeaderBuyers = () => {
  const [category, setCategory] = useState([
    {
      categoryName: "Elektronik",
    },
    {
      categoryName: "Makanan",
    },
    {
      categoryName: "Tas",
    },
    {
      categoryName: "Alat masak",
    },
    {
      categoryName: "Aksesoris",
    },
    {
      categoryName: "Gadget",
    },
  ]);

  const [alamat, setAlamat] = useState(" Jl. Flamboyan 1");

  return (
    <div className="header-parent-container">
      <div className="container-header-top">
        <div className="container-inside-cht">
          <Link to="/" className="link" style={{ color: "rgb(80, 80, 80)" }}>
            <p>About</p>
          </Link>
          <Link to="/" className="link" style={{ color: "rgb(80, 80, 80)" }}>
            <p>Help</p>
          </Link>
          <Link to="/" className="link" style={{ color: "rgb(80, 80, 80)" }}>
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

        <div className="header-buyers-container-bottom">
          <div className="category-div"></div>
          <div className="category-div-1">
            {category.map((val) => (
              <Link
                to={val.categoryName}
                className="link"
                style={{ color: "rgb(80, 80, 80)", fontSize: "12px" }}
              >
                <p>{val.categoryName}..</p>
              </Link>
            ))}
          </div>
          <div className="category-div-2">
            <p>
              Kirim ke <span style={{ fontWeight: "800" }}>{alamat}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderBuyers;
