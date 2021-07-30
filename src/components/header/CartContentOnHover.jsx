import React, { useState } from "react";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import CachedIcon from "@material-ui/icons/Cached";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import Badge from "@material-ui/core/Badge";
import "../styles/CartContentOnHover.css";

export default function IconHeaderBuyers(props) {
  const [icon, setIcon] = useState(props.icon);
  const [totalCart, setTotalCart] = useState(0);
  const [products, setProduct] = useState([
    {
      productName:
        "Charger Samsung Galaxy A6 A6+ plus Original 100% cas casan ori carger",
      price: "Rp. 78.380",
      totalProduct: "1",
    },
    {
      productName:
        "Samsung Smart Monitor M5 27 S27AM500 HDR10 FHD LS27AM500NEXXD",
      price: "Rp. 4.360.000",
      totalProduct: "1",
    },
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

  const renderNotifContent = () => {
    return (
      <div className="container-content-ccon-2">
        <div>
          <Badge badgeContent={1} color="secondary">
            <QueryBuilderIcon
              style={{
                fontSize: "30px",
              }}
            />
          </Badge>
        </div>

        <div>
          <Badge badgeContent={2} color="secondary">
            <CachedIcon
              style={{
                fontSize: "30px",
              }}
            />
          </Badge>
        </div>

        <div>
          <Badge badgeContent={0} color="secondary">
            <LocalShippingOutlinedIcon
              style={{
                fontSize: "30px",
              }}
            />
          </Badge>
        </div>

        <div>
          <Badge badgeContent={0} color="secondary">
            <PinDropOutlinedIcon
              style={{
                fontSize: "30px",
              }}
            />
          </Badge>
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
              <p style={{ fontWeight: "700", fontSize: "14px" }}>
                Total {totalCart}
              </p>
            </div>
            <div>
              <p style={{ fontWeight: "600", fontSize: "13px" }}>Cart</p>
            </div>
          </div>
          <div className="content-ccon-cart">{renderCartContent()}</div>
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
