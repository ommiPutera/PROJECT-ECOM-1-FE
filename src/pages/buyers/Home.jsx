import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderBuyers from "../../components/header/HeaderBuyers";
import HeaderNotUser from "../../components/header/HeaderNotUser";
import Jumbotron from "../../components/Jumbotron";
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
      category: "Makanan",
    },
    {
      category: "Alat Masak",
    },
    {
      category: "Aksesoris",
    },
    {
      category: "Gadget",
    },
    {
      category: "Laptop",
    },
    {
      category: "Serba 100rb",
    },
  ]);

  return (
    <>
      <div>
        {isLogin ? <HeaderBuyers /> : <HeaderNotUser />}
        <Jumbotron />
        <div className="container-home">
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
          <div className="category-container">
            {categoryHome.map((val) => (
              <Link
                to={val.category}
                className="link"
                style={{ color: "#0A1931" }}
              >
                <div className="category-name">
                  <p style={{ width: "100px", textAlign: "center" }}>
                    {val.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
