import React, { useState } from "react";
import "../styles/Product.css";

export default function Product(props) {
  return (
    <div style={{ height: "350px" }}>
      <div className="card-container">
        <div className="card-content">
          <div className="product-img">
            <img src={props.src} alt="prod" width="100%" height="100%" />
          </div>
          <div className="product-info-cont">
            <div className="product-name">
              <p>{props.productName}</p>
            </div>
            <div style={{ display: "flex" }}>
              <div
                className={`color-text-${props.diskon} ${
                  props.diskon === "0" ? "" : "diskon"
                }`}
              >
                <p>{props.promo}</p>
              </div>
              <div className="potongan">
                {props.diskon === "0" ? null : (
                  <p
                    style={{
                      textDecorationLine: "line-through",
                      fontSize: "11.5px",
                      color: "rgb(150, 150, 150)",
                    }}
                  >
                    Rp{props.price}
                  </p>
                )}
              </div>
            </div>
            <div className="product-price-and-sold">
              <p>Rp{props.price - props.price * (props.diskon / 100)}</p>
              <p>Terjual {props.sold}</p>
            </div>
            <div className="workshop-location">
              <p>{props.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
