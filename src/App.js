import { useEffect } from "react";
import WebFont from "webfontloader";
import "./App.css";
import Banner from "./Components/banner/Banner";
import GameBid from "./Components/gameBid/GameBid";
import Header from "./Components/head_foot/Header";
import KnowAboutUs from "./Components/knowAbout/KnowAboutUs";

const App = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Tilt Neon","Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <GameBid />
      <KnowAboutUs />
    </>
  );
};

export default App;
