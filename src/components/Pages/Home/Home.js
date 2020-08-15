import React from "react";
import WereCards from "./WereCards";
import HWWBanner from "./HWWBanner";
import Banner from "../../Header/Banner";
const Home = () => {
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
