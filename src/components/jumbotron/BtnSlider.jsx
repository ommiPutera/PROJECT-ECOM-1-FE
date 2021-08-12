import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "../styles/Slider.css";

export default function BtnSlider({ direction, moveSlide, file }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? `btn-slide next next-${file}` : `btn-slide next prev-${file}`}
    >
      <div style={{ textAlign: "center" }}>
        {direction === "next" ? (
          <ArrowForwardIosIcon
            style={{ fontSize: "15px", marginTop: "2px", color: file == "product" ? "black" : "white" }}
          />
        ) : (
          <ArrowBackIosIcon style={{ fontSize: "16px", marginTop: "2px", marginLeft: "3px", color: file == "product" ? "black" : "white" }} />
        )}
      </div>
    </button>
  );
}
