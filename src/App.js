import { useEffect } from "react";
import WebFont from "webfontloader";
import "./App.css";
import Banner from "./Components/banner/Banner";
import GameBid from "./Components/gameBid/GameBid";
import Header from "./Components/head_foot/Header";
import JoinCommunity from "./Components/joinCommunity/JoinCommunity";
import KnowAboutUs from "./Components/knowAbout/KnowAboutUs";
import RoadMap from "./Components/roadMap/RoadMap";
import OurTeam from "./Components/team/OurTeam";

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
      <OurTeam />
      <JoinCommunity />
      <RoadMap />
    </>
  );
};

export default App;
