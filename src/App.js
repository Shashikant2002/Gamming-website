import { useEffect } from "react";
import WebFont from "webfontloader";
import "./App.css";
import Banner from "./Components/banner/Banner";
import Header from "./Components/head_foot/Header";
import GameBid from "./Components/gameBid/GameBid";
import Footer from "./Components/head_foot/Footer";
import JoinCommunity from "./Components/joinCommunity/JoinCommunity";
import KnowAboutUs from "./Components/knowAbout/KnowAboutUs";
import RoadMap from "./Components/roadMap/RoadMap";
import OurTeam from "./Components/team/OurTeam";
import TopTrending from "./Components/topTrending/TopTrending";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommonPageBanner from "./Components/commonPageBanner/CommonPageBanner";
import PowerFulSer from "./Components/powerFulService/PowerFulSer";

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Tilt Neon", "Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <GameBid />
                <KnowAboutUs />
                <OurTeam />
                <JoinCommunity />
                <RoadMap />
                <TopTrending />
              </>
            }
          />

          <Route
            path="/aboutus"
            element={
              <>
                <CommonPageBanner title={"ABOUT US"} img={"assets/img/breadcrumb_img01.png"} />
                <PowerFulSer />
                <OurTeam />
              </>
            }
          />
          
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
