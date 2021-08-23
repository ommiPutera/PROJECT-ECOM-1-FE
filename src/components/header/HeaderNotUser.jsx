import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconHeaderNotUser from "./IconHeaderNotUser";
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
    {
      categoryName: "Promo Toko Resmi",
    },
    {
      categoryName: "Dukung UMKM Lokal",
    },
  ]);

  const [alamat, setAlamat] = useState("");

  return (
    <div className="header-parent-container">
      <div className="container-header-top">
      <div className="container-inside-cht">
          <Link to="/" className="link" style={{ color: "rgb(80, 80, 80)", fontSize: "12px" }}>
            <p>About</p>
          </Link>
          <Link to="/" className="link" style={{ color: "rgb(80, 80, 80)", fontSize: "12px" }}>
            <p>Help</p>
          </Link>
          <Link to="/" className="link" style={{ color: "rgb(80, 80, 80)", fontSize: "12px" }}>
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
          <div className="hb-center-2">
            <SearchInputBuyers />
          </div>
          <div className="hb-right-notuser">
            <IconHeaderNotUser />
          </div>
        </div>
        <div className="header-buyers-container-bottom">
          <div className="category-div"></div>
          <div className="category-div-1 nt-user">
            {category.map((val) => (
              <Link
                to={val.categoryName}
                className="link"
                style={{ color: "rgb(80, 80, 80)", fontSize: "11px" }}
              >
                <p>{val.categoryName}..</p>
              </Link>
            ))}
          </div>
          <div className="category-div-2">
            {alamat ? (
              <p style={{ fontSize: "12px" }}>
                Kirim ke <span style={{ fontWeight: "800" }}>{alamat}</span>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderBuyers;
