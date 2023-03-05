import React from "react";
import "./pageBanner.css";
import { Link } from "react-router-dom";

const CommonPageBanner = ({ title, img }) => {
  return (
    <>
      <section className="pageBanner">
        <div className="container flex justifySpaceBet alignCenter">
          <div className="content">
            <h2>{title}</h2>
            <h5><Link to="/">HOME</Link> <span>ABOUT US</span></h5>
          </div>
          <div className="image">
            <img src={img} alt="breadcrumb_img01" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonPageBanner;
