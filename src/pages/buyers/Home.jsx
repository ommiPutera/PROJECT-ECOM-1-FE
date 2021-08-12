import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderBuyers from "../../components/header/HeaderBuyers";
import HeaderNotUser from "../../components/header/HeaderNotUser";
import ListProductCart from "../../components/product/Product";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import Footer from "../../components/Footer";
import Promo2 from "../../assets/promo1.png";
import Promo1 from "../../assets/promo2.png";
import Promo3 from "../../assets/promo3.png";
import "../styles/Home.css";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [categoryHome, setCategoryHome] = useState([
    {
      category: "Elektronik",
    },
    {
      category: "Makanan & Minuman",
    },
    {
      category: "Alat Masak",
    },
    {
      category: "Aksesoris Motor",
    },
    {
      category: "Gadget Kekinian",
    },
    {
      category: "Laptop Gaming",
    },
    {
      category: "Serba 100rb",
    },
    {
      category: "Serba 50rb",
    },
  ]);
  const [listPromo, setListPromo] = useState([
    {
      promo: "Semua Promo",
      color: "hijau",
    },
    {
      promo: "Masker Sensi diskon 10%",
    },
    {
      promo: "Redoxon cashback sampai 10rb",
    },
    {
      promo: "Dapatkan diskon 50%",
      color: "kuning",
    },
    {
      promo: "Dapatkan diskon 20%",
      color: "biru",
    },
    {
      promo: "Dapatkan diskon 30%",
      color: "hitam",
    },
  ]);

  return (
    <div>
      {isLogin ? <HeaderBuyers /> : <HeaderNotUser />}
      <Jumbotron />
      <div className="container-home">
        <div className="category-container pertama">
          {categoryHome.map((val) => (
            <Link
              to={val.category}
              className="link"
              style={{ color: "#0A1931" }}
            >
              <div className="category-name">
                <p className="category-inside">{val.category}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="promo-container">
          <div className="promo-flex">
            <img
              style={{ borderRadius: "8px" }}
              src={Promo1}
              alt="promo-1"
              width="100%"
              height="100%"
            />
          </div>
          <div className="promo-flex">
            <img
              style={{ borderRadius: "8px" }}
              src={Promo2}
              alt="promo-2"
              width="100%"
              height="100%"
            />
          </div>
          <div className="promo-flex">
            <img
              style={{ borderRadius: "8px" }}
              src={Promo3}
              alt="promo-3"
              width="100%"
              height="100%"
            />
          </div>
        </div>

        <div>
          <h1>Terlaris</h1>
          <ListProductCart list="1" />
        </div>
        <div className="category-container">
          {listPromo.map((val) => (
            <Link
              to={val.category}
              className="link"
              style={{ color: "#0A1931" }}
            >
              <div className={`color-${val.color} category-name`}>
                <p className="category-inside">{val.promo}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flash-sale-section">
          <div className="container-flash-sale-home">
            <h2>Flash sale</h2>
            <p>Berakhir dalam</p>
            <div className="rundown">
              <p>01:</p>
              <p>30:</p>
              <p>19</p>
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <ListProductCart list="flash-sale" />
          </div>
        </div>
        <div className="rekomendasi-section">
          <h1 style={{ marginTop: "15px" }}>Rekomendasi</h1>
          <ListProductCart list="2" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
