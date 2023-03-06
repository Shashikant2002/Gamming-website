import React from "react";
import Heading from "../heading/Heading";
import "./powerfulSer.css";

const PowerFulSer = () => {
  return (
    <>
      <div className="powerFulService commonSection">
        <div className="container flex">
          <div className="content">
            <Heading
              description={"POWERFUL SERVICES"}
              title_1={"OUR POWERFUL SERVICES DONE ON TIME"}
            />
            hello
          </div>
          <div className="image">
            <img src="assets/img/services_img01.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PowerFulSer;
