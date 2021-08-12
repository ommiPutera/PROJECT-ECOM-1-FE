import React, { useState } from "react";
import prod from "./prod.jpg";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";
import "./styles/Footer.css";

export default function Footer(props) {
  return (
    <div className="jumbotron-footer">
      <div className="footer-1">
        <div className="footer-1-inside">
          <div className="footer-1-1">
            <div>Logo</div>
            <div>
              <p>About Logo</p>
              <p>Property Rights</p>
              <p>Blog</p>
              <p>Bridestory</p>
              <p>Logo Partners</p>
              <p>Mitra blog</p>
              <div className="footer-1-logo">
                <div>
                  <AiFillTwitterCircle />
                </div>
                <div>
                  <AiFillInstagram />
                </div>
                <div>
                  <AiFillFacebook />
                </div>
                <div>
                  <AiFillYoutube />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-1-2">
            <div>Services</div>
            <div>
              <p>amazing deals</p>
              <p>quality furniture</p>
              <p>modern design</p>
              <p>best support</p>
            </div>
          </div>
          <div className="footer-1-3">
            <div>Contact Us</div>
            <div>
              <p>get in touch</p>
              <p>partner</p>
              <p>careers</p>
            </div>
          </div>
          <div className="footer-1-4">
            <div>Legal</div>
            <div>
              <p>privacy policy</p>
              <p>terms of use</p>
              <p>cookie policy</p>
              <p>booking terms and conditions</p>
            </div>
          </div>
        </div>
        <div className="footer-img-content">
          <div>
            <img src={prod} alt="" />
          </div>
          <div>
            <a href="https://play.google.com/store" target="_blank">
              {/* <img src={prod} alt="" /> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
