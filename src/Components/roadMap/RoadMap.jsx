import React from "react";
import "./roadMap.css";

const RoadMap = () => {
  return (
    <>
      <div className="roadMap commonSection">
        <div className="container flex">
          <div className="content">
            <h2>A LOOK INTO ROADMAPS SEASONS</h2>
            <p>
              With Season 1 Ending with our play and Duis elementum sollicitudin
              is yaugue euismods Nulla ulla Player-focused updates games from
              Mobile App and Enjoy.
            </p>
            <a className="glButtonFill" href="/">
              <span>ROADMAP</span>
            </a>

            <div className="image">
              <img src="assets/img/roadmap.png" alt="" />
            </div>
          </div>
          <div className="cardsSession">
            <div className="card">
              <h3>SEASON 1</h3>
              <p className="greenDot">Battle Practice Mode</p>
              <p className="greenDot">Android Mobile</p>
              <p className="greenDot">iOS Open Beta</p>
              <p className="greenDot">Land Creation & Building</p>
            </div>
            <div className="card">
              <h3>SEASON 2</h3>
              <p className="greenDot">Battle Practice Mode</p>
              <p className="greenDot">Android Mobile</p>
              <p className="notFilled">iOS Open Beta</p>
              <p className="notFilled">Land Creation & Building</p>
            </div>
            <div className="card">
              <h3>SEASON 3</h3>
              <p className="notFilled">Battle Practice Mode</p>
              <p className="notFilled">Android Mobile</p>
              <p className="notFilled">iOS Open Beta</p>
              <p className="notFilled">Land Creation & Building</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadMap;
