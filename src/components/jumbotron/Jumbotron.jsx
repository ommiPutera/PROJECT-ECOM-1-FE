import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import "../styles/Jumbotron.css";

export default function Jumbotron() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [btnClick, setBtnClick] = useState(true);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
    console.log(slideIndex);
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    setTimeout(function () {
      if (slideIndex !== dataSlider.length) {
        setSlideIndex(slideIndex + 1);
      } else if (slideIndex === dataSlider.length) {
        setSlideIndex(1);
      }
    }, 6000);
  }, [slideIndex]);

  return (
    <div>
      <div className="container-slider">
        {dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img
                src={obj.src}
                alt="jumbotroneHome"
                width="100%"
                height="100%"
              />
              <Link
                to="/shop"
                className="link"
                style={{ color: "rgb(80, 80, 80)" }}
              >
                <div className="botton-jbt-shop">
                  <p>SHOP NOW</p>
                </div>
              </Link>
            </div>
          );
        })}
        {/* <BtnSlider moveSlide={nextSlide} direction={"next"} file={"jumbo"} /> */}
        {/* <BtnSlider moveSlide={prevSlide} direction={"prev"} file={"jumbo"} /> */}
        <div className="container-dots">
          {Array.from({ length: 5 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
