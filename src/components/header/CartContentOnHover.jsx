import React, { useState } from "react";
import { Link } from "react-router-dom";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import CachedIcon from "@material-ui/icons/Cached";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import Badge from "@material-ui/core/Badge";
import cartVector from "../../assets/cart.png";
import "../styles/CartContentOnHover.css";

export default function IconHeaderBuyers(props) {
  const [icon, setIcon] = useState(props.icon);
  const [products, setProduct] = useState([
    // {
    //   productName:
    //     "Charger Samsung Galaxy A6 A6+ plus Original 100% cas casan ori carger",
    //   price: "Rp. 78.380",
    //   totalProduct: "1",
    // },
    // {
    //   productName:
    //     "Samsung Smart Monitor M5 27 S27AM500 HDR10 FHD LS27AM500NEXXD",
    //   price: "Rp. 4.360.000",
    //   totalProduct: "1",
    // },
  ]);

  const renderCartContent = () => {
    return products.map((val) => (
      <div className="container-content-ccon">
        <div>
          <p className="proudctname-ccon-cart">
            {val.productName.length > 26
              ? val.productName.slice(0, 26) + ".."
              : val.productName}
          </p>
          <p style={{ fontWeight: "600", fontSize: "13px" }}>
            {val.totalProduct} Barang
          </p>
        </div>
        <div>
          <p className="price-ccon-cart">{val.price}</p>
        </div>
      </div>
    ));
  };

  const renderCartContentNotUser = () => {
    return (
      <div className="container-content-ccon">
        <div className="container-empty-cart">
          <img src={cartVector} alt="empty-cart" width="85%" height="85%" />
          <p className="cart-ccon-text-1">Your shopping cart is empty..</p>
          <p className="cart-ccon-text-2">Let's adding your product here.</p>
        </div>
      </div>
    );
  };

  const renderNotifContent = () => {
    return (
      <div className="container-content-ccon-2">
        <div className="container-text-icon">
          <Badge badgeContent={4} color="secondary">
            <QueryBuilderIcon
              style={{
                fontSize: "30px",
                color: "rgb(80, 80, 80)"
              }}
            />
          </Badge>
          <p style={{ marginTop: "3px" }}>Awaiting</p>
        </div>
        <div className="container-text-icon">
          <Badge badgeContent={0} color="secondary">
            <CachedIcon
              style={{
                fontSize: "30px",
                color: "rgb(80, 80, 80)"
              }}
            />
          </Badge>
          <p style={{ marginTop: "3px" }}>Processed</p>
        </div>
        <div className="container-text-icon">
          <Badge badgeContent={0} color="secondary">
            <LocalShippingOutlinedIcon
              style={{
                fontSize: "30px",
                color: "rgb(80, 80, 80)"
              }}
            />
          </Badge>
          <p style={{ marginTop: "3px" }}>Sending</p>
        </div>
        <div className="container-text-icon">
          <Badge badgeContent={1} color="secondary">
            <PinDropOutlinedIcon
              style={{
                fontSize: "30px",
                color: "rgb(80, 80, 80)"
              }}
            />
          </Badge>
          <p style={{ marginTop: "3px" }}>Delivered</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      {icon === "cart" ? (
        <div className="cart-content-onhover-container">
          <div className="header-ccon-cart">
            <div>
              {products.length ? (
                <p style={{ fontWeight: "700", fontSize: "14px" }}>
                  Total {products.length}
                </p>
              ) : null}
            </div>
            <div>
              {products.length ? (
                <div>
                  <p style={{ fontWeight: "600", fontSize: "13px" }}>Cart</p>
                </div>
              ) : null}
            </div>
          </div>
          <div className="content-ccon-cart">
            {products.length ? renderCartContent() : renderCartContentNotUser()}
          </div>
          {products.length ? (
            <div
              style={{
                textAlign: "center",
                padding: "10px 0px 10px 0px",
                fontWeight: "600",
              }}
            >
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "#052c43" }}
              >
                see your cart
              </Link>
            </div>
          ) : null}
        </div>
      ) : icon === "notification" ? (
        <div className="cart-content-onhover-container">
          <div className="header-ccon-cart">
            <div>
              <p style={{ fontWeight: "700", fontSize: "14px" }}>Purchase</p>
            </div>
            <div>
              <p style={{ fontWeight: "600", fontSize: "13px" }}>See all</p>
            </div>
          </div>
          <div className="content-ccon-notif">{renderNotifContent()}</div>
        </div>
      ) : icon === "message" ? (
        <div className="cart-content-onhover-container">
          <p>Hello Content</p>
        </div>
      ) : null}
    </div>
  );
}
