import { useEffect } from "react";
import WebFont from "webfontloader";
import "./App.css";
import Banner from "./Components/banner/Banner";
import Header from "./Components/head_foot/Header";

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
    </>
  );
};

export default App;
