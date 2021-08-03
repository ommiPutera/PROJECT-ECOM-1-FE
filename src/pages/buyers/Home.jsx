import React, { useState } from "react";
import HeaderBuyers from "../../components/header/HeaderBuyers";
import HeaderNotUser from "../../components/header/HeaderNotUser";
import Jumbotron from "../../components/Jumbotron";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      {isLogin ? <HeaderBuyers /> : <HeaderNotUser />}
      <Jumbotron />
    </div>
  );
};

export default Home;
