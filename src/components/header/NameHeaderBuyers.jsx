import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { deepPurple } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import "../styles/NameHeaderBuyers.css";

const useStyles = makeStyles((theme) => ({
  black: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: "#185ADB",
    width: "29px",
    height: "29px",
    fontSize: "11px",
    marginRight: "12px",
  },
  imageProfile: {
    width: "29px",
    height: "29px",
    fontSize: "12px",
    marginRight: "12px",
  },
}));

export default function NameHeaderBuyers() {
  const [profile, setProfile] = useState(false);

  const classes = useStyles();

  return (
    <div className="name-header-buyers-container">
      <Link to="/cart" className="link nhb-content">
        <div className="nhb-name" style={{ width: "100px", height: "35px" }}>
          {profile ? (
            <Avatar
              className={classes.imageProfile}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
          ) : (
            <Avatar className={classes.black}>JA</Avatar>
          )}
          <p style={{ fontWeight: "700", fontSize: "13px", color: "#185ADB" }}>Jamaludin</p>
        </div>
      </Link>
    </div>
  );
}
