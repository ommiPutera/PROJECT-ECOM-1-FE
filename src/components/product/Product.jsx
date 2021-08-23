import React, { useState, useEffect } from "react";
import BtnSlider from "../jumbotron/BtnSlider";
import CardProduct from "./Card";
import dataProduct from "./dataProduct";
import dataProductKe2 from "./dataProductKe2";
import dataProductFlashsale from "./dataProductFlashsale";
import "../styles/Product.css";

export default function Product(props) {
  const [limit, setLimit] = useState(10);
  const [next, setNext] = useState(false);
  const [productListPertama, setProductListPertama] = useState([]);
  const [productListKedua, setProductListKedua] = useState([]);
  const [productListFlashSale, setProductListFlashSale] = useState([]);

  const rollingArr = () => {
    return productListFlashSale.map((data, index) => (
      <div className="pl-left-fs">
        <div className="pl-card-fs">{cardTmplet(data)}</div>
      </div>
    ));
  };

  const nextCard = () => {
    let rollArr = [ ...productListFlashSale ]
    let arr = rollArr
    arr.push(arr.splice(0, 1)[0])
    console.log(arr)
    setProductListFlashSale(arr)
  }

  const previousCard = () => {
    let rollArr = [ ...productListFlashSale ]
    let arr = rollArr
    arr.reverse()
    arr.push(arr.splice(0, 1)[0])
    arr.reverse()
    console.log(arr)
    setProductListFlashSale(arr)
  }

  const cardTmplet = (value) => {
    return (
      <CardProduct
        productName={
          value.namaProduct.length >= 39
            ? value.namaProduct.slice(0, 35) + ".."
            : value.namaProduct
        }
        price={value.harga}
        sold={
          value.terjual >= 1000 &&
          value.terjual.toString().slice(1, 2) != 0 &&
          value.terjual <= 9999
            ? value.terjual.toString().slice(0, 1) +
              "," +
              value.terjual.toString().slice(1, 2) +
              "rb"
            : value.terjual >= 9999
            ? value.terjual.toString().slice(0, 2) +
              "," +
              value.terjual.toString().slice(2, 3) +
              "rb"
            : value.terjual
        }
        src={value.img}
        location={
          value.lokasi >= 15 ? value.lokasi.slice(0, 15) + ".." : value.lokasi
        }
        jenis={value.jenis}
        diskon={value.diskon}
        promo={value.diskon === "0" ? "" : value.diskon + "%"}
      />
    );
  };
  const renderCard = (renderList) => {
    return productListPertama
      .slice(0, renderList)
      .map((val) => cardTmplet(val));
  };
  const onLoadMoreclick = () => {
    if (document.documentElement.scrollTop > 2700 && limit < 40) {
      setLimit(limit + 10);
      console.log("heii");
    }
  };
  const onLoadMoreclickAgain = () => {
    if (limit <= productListKedua.length) {
      setLimit(limit + 10);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setProductListPertama(dataProduct);
      setProductListKedua(dataProductKe2);
      setProductListFlashSale(dataProductFlashsale);
    }, 3000);
  }, []);
  useEffect(() => {
    if (limit > 40) {
      return null;
    } else {
      window.onscroll = () => onLoadMoreclick();
    }
  }, [limit]);

  return (
    <div>
      {props.list === "1" ? (
        <div>
          <div className="product-list-container-2">
            <div className="pl-left">
              <div className="pl-card full-list">
                {productListPertama.length ? renderCard(3) : <p>loading</p>}
              </div>
            </div>
            <div className="pl-right">
              <p>2</p>
            </div>
          </div>
          <div className="product-list-container">
            {productListPertama.length ? (
              productListPertama.slice(3).map((data, index) => (
                <div className="pl-left">
                  <div className="pl-card full-list">{cardTmplet(data)}</div>
                </div>
              ))
            ) : (
              <p>loading</p>
            )}
          </div>
        </div>
      ) : null}
      {props.list === "2" ? (
        <div>
          <div className="product-list-container">
            {productListKedua.slice(0, limit).map((data, index) => (
              <div className="pl-left">
                <div className="pl-card full-list">{cardTmplet(data)}</div>
              </div>
            ))}
          </div>
          <div className="lm-container">
            <div className="load-more" onClick={onLoadMoreclickAgain}>
              Muat lebih banyak
            </div>
          </div>
        </div>
      ) : null}
      {props.list === "flash-sale" ? (
        <div className="container-fs">
          <div className={`product-list-container-fs ${next}`}> {rollingArr()} </div>
          <div className="button-slider-fs">
            <BtnSlider
              moveSlide={nextCard}
              direction={"next"}
              file={"product"}
            />
          </div>
          <div className="button-slider-fs">
            <BtnSlider
              moveSlide={previousCard}
              direction={"prev"}
              file={"product"}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
