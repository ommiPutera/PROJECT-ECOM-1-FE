import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import Badge from "@material-ui/core/Badge";
import NameHeaderBuyers from "./NameHeaderBuyers";
import "./styles/IconHeaderBuyers.css";

export default function IconHeaderBuyers() {
  return (
    <div className="icon-header-buyers-container">
      <div className="ihb-left">
        <Link to="/cart" className="link ihb-icon">
          <div className="ihb-icon-container">
            <Badge badgeContent={0} color="secondary">
              <ShoppingCartOutlinedIcon
                style={{
                  fontSize: "27px",
                }}
              />
            </Badge>
          </div>
        </Link>
        <Link to="/cart" className="link ihb-icon">
          <div className="ihb-icon-container">
            <Badge badgeContent={0} color="secondary">
              <NotificationsNoneIcon
                style={{
                  fontSize: "28px",
                }}
              />
            </Badge>
          </div>
        </Link>
        <Link to="/cart" className="link ihb-icon">
          <div className="ihb-icon-container">
            <Badge badgeContent={0} color="secondary">
              <MailOutlineIcon
                style={{
                  fontSize: "28px",
                }}
              />
            </Badge>
          </div>
        </Link>
        <div className="ihb-icon-container">
          <Brightness2OutlinedIcon
            style={{
              fontSize: "27px",
              cursor: "pointer",
              color: "rgb(80, 80, 80)",
            }}
          />
        </div>
      </div>
      <div className="ihb-right">
        <NameHeaderBuyers />
      </div>
    </div>
  );
}
