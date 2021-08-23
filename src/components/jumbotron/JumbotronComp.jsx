import React, { useState, useEffect } from "react";
import "../styles/Jumbotron.css";

export default function Jumbotron(props) {
  const [slideIndex, setSlideIndex] = useState(1);
  const [data, setData] = useState(props.data);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    setTimeout(function () {
      if (slideIndex !== data.length) {
        setSlideIndex(slideIndex + 1);
      } else if (slideIndex === data.length) {
        setSlideIndex(1);
      }
    }, 6000);
  }, [slideIndex]);

  return (
    <div>
      <div className="container-slider" style={{ height: `${props.height}` }}>
        {data.map((val, index) => {
          return (
            <div
              key={val.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img
                src={val.src}
                alt="jumbotroneHome"
                width="100%"
                height="100%"
              />
            </div>
          );
        })}
        <div className="container-dots">
          {Array.from({ length: props.length }).map((item, index) => (
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
