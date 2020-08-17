import React from "react";
import WereCards from "./WereCards";
import HWWBanner from "./HWWBanner";
import Banner from "../../Header/Banner";
import { useHistory } from "react-router-dom";
const Home = () => {
  const {location:{pathname}} = useHistory();
  console.log(pathname)
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
