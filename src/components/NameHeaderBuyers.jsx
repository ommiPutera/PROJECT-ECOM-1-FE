import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { deepPurple } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import "./styles/NameHeaderBuyers.css";

const useStyles = makeStyles((theme) => ({
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    width: "35px",
    height: "35px",
    fontSize: "15px",
    marginRight: "10px",
  },
  imageProfile: {
    width: "35px",
    height: "35px",
    fontSize: "15px",
    marginRight: "10px",
  },
}));

export default function NameHeaderBuyers() {
  const [profile, setProfile] = useState(false);

  const classes = useStyles();

  return (
    <div className="name-header-buyers-container">
      <Link to="/cart" className="link nhb-content">
        <div className="nhb-name">
          {profile ? (
            <Avatar
              className={classes.imageProfile}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
          ) : (
            <Avatar className={classes.purple}>JA</Avatar>
          )}
          <p>Jamaludin</p>
        </div>
      </Link>
    </div>
  );
}
