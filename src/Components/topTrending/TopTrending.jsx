import React from "react";
import "./topTrending.css";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import NftCard from "../Cards/NftCard";
// For React Corusel 
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TopTrending = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="topTrending commonSection">
        <div className="container">
          <div className="headingTop flex justifySpaceBet alignCenter">
            <div className="headingTrending">
              <h2 className="flex alignCenter">
                TOP TRENDING <MdOutlineLocalFireDepartment />
              </h2>
            </div>
          </div>
          <div className="slider">
            <Carousel responsive={responsive} infinite={true}>
              <NftCard
                img={"assets/img/nft_img04.jpg"}
                profile={"assets/img/nft_avatar01.png"}
              />
              <NftCard
                img={"assets/img/nft_img05.jpg"}
                profile={"assets/img/nft_avatar02.png"}
              />
              <NftCard
                img={"assets/img/nft_img06.jpg"}
                profile={"assets/img/nft_avatar03.png"}
              />
              <NftCard
                img={"assets/img/nft_img07.jpg"}
                profile={"assets/img/nft_avatar01.png"}
              />
              <NftCard
                img={"assets/img/nft_img08.jpg"}
                profile={"assets/img/nft_avatar02.png"}
              />
            </Carousel>
            ;
          </div>
        </div>
      </div>
    </>
  );
};

export default TopTrending;
