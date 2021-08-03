import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NameHeaderBuyers.css";

export default function NameHeaderBuyers() {
  const [toko, setToko] = useState("Jaya Abadi Sejahtera");

  return (
    <div className="name-header-buyers-container">
      <Link to="/cart" className="link nhb-content">
        <div className="nhb-name" style={{ width: "100px", height: "35px" }}>
          <p style={{ fontWeight: "700", fontSize: "17px", color: "#C4C4C4" }}>{toko.length > 10 ? toko.slice(0, 10) + ".." : toko.length ? toko : "Buka Toko"}</p>
        </div>
      </Link>
    </div>
  );
}
