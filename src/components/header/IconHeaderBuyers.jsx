import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Badge from "@material-ui/core/Badge";
import NameHeaderBuyers from "./NameHeaderBuyers";
import CartContentOnHover from "./CartContentOnHover";
import "../styles/IconHeaderBuyers.css";

export default function IconHeaderBuyers() {
  return (
    <div className="icon-header-buyers-container">
      <div className="ihb-left">
        <Link to="/cart" className="link ihb-icon">
          <div className="ihb-icon-container iic-1">
            <Badge badgeContent={0} color="secondary">
              <ShoppingCartOutlinedIcon
                style={{
                  fontSize: "27px",
                }}
              />
            </Badge>
            <div className="white-back"></div>
            <div className="ihb-cart-container ihb-cnm-container">
              <CartContentOnHover icon="cart" />
            </div>
          </div>
        </Link>
        <Link to="/cart" className="link ihb-icon">
          <div className="ihb-icon-container iic-2">
            <Badge badgeContent={0} color="secondary">
              <NotificationsNoneIcon
                style={{
                  fontSize: "28px",
                }}
              />
            </Badge>
            <div className="white-back"></div>
            <div className="ihb-notif-container ihb-cnm-container">
              <CartContentOnHover icon="notification" />
            </div>
          </div>
        </Link>
        <Link to="/cart" className="link ihb-icon">
          <div className="ihb-icon-container iic-3">
            <Badge badgeContent={0} color="secondary">
              <MailOutlineIcon
                style={{
                  fontSize: "28px",
                }}
              />
            </Badge>
            <div className="white-back"></div>
            <div className="ihb-message-container ihb-cnm-container">
              <CartContentOnHover icon="message" />
            </div>
          </div>
        </Link>
      </div>
      <div className="ihb-right">
        <NameHeaderBuyers />
      </div>
    </div>
  );
}
