import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Badge from "@material-ui/core/Badge";
import NameHeaderBuyers from "./NameHeaderBuyers";
import TokoHeaderBuyers from "./TokoHeaderBuyers";
import CartContentOnHover from "./CartContentOnHover";
import "../styles/IconHeader.css";

export default function IconHeaderBuyers() {
  return (
    <div className="icon-header-buyers-container">
      <div className="ihb-left">
      <div className="back-black"></div>
        <div className="ihb-icon-container iic-1">
          <Link to="/cart" className="link ihb-icon">
            <Badge badgeContent={0} color="secondary">
              <ShoppingCartOutlinedIcon
                style={{
                  fontSize: "23px",
                  color: "rgb(80, 80, 80)",
                }}
              />
            </Badge>
          </Link>
          <div className="white-back"></div>
          <div className="ihb-cart-container ihb-cnm-container">
            <CartContentOnHover icon="cart" />
          </div>
        </div>
        <div className="ihb-icon-container iic-2">
          <Link to="/cart" className="link ihb-icon">
            <Badge badgeContent={9} color="secondary">
              <NotificationsNoneIcon
                style={{
                  fontSize: "23px",
                  color: "rgb(80, 80, 80)",
                }}
              />
            </Badge>
          </Link>
          <div className="white-back"></div>
          <div className="ihb-notif-container ihb-cnm-container">
            <CartContentOnHover icon="notification" />
          </div>
        </div>
        <div className="ihb-icon-container iic-3">
          <Link to="/cart" className="link ihb-icon">
            <Badge badgeContent={1} color="secondary">
              <MailOutlineIcon
                style={{
                  fontSize: "23px",
                  color: "rgb(80, 80, 80)",
                }}
              />
            </Badge>
          </Link>
          <div className="white-back"></div>
          <div className="ihb-message-container ihb-cnm-container">
            <CartContentOnHover icon="message" />
          </div>
        </div>
      </div>
      <div className="ihb-right">
        <TokoHeaderBuyers />
      </div>
      <div className="ihb-right">
        <NameHeaderBuyers />
      </div>
    </div>
  );
}
