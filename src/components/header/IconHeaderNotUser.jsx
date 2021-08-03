import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Badge from "@material-ui/core/Badge";
import CartContentOnHover from "./CartContentOnHover";
import "../styles/IconHeader.css";

export default function IconHeaderBuyers() {
  return (
    <div className="icon-header-buyers-container">
      <div className="ihb-left-notuser">
        <div className="ihb-icon-container iic-1">
          <Link to="/cart" className="link ihb-icon">
            <Badge badgeContent={0} color="secondary">
              <ShoppingCartOutlinedIcon
                style={{
                  fontSize: "27px",
                  color: "#C4C4C4"
                }}
              />
            </Badge>
          </Link>
          <div className="white-back"></div>
          <div className="ihb-cart-container ihb-cnm-container">
            <CartContentOnHover icon="cart" />
          </div>
        </div>
        <Link to="/login" className="link ihb-icon">
          <div className="ihb-icon-container login-header">Login</div>
        </Link>
        <Link to="/register" className="link ihb-icon">
          <div className="ihb-icon-container-register register-header">
            Register
          </div>
        </Link>
      </div>
    </div>
  );
}
