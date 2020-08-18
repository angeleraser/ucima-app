import React, { useContext, useEffect } from "react";
import WereCards from "./WereCards";
import HWWBanner from "./HWWBanner";
import Banner from "../../Header/Banner";
import { AppContext } from "../../App/AppContext";
const Home = () => {
  const { setCurrentPage } = useContext(AppContext);
  useEffect(() => {
    setCurrentPage("/");
  });
  return (
    <main className="main-content home">
      <Banner />
      <h1>Tres razones para elegirla</h1>
      <WereCards />
      <HWWBanner />
    </main>
  );
};

export default Home;
