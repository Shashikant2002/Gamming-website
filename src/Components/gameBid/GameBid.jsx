import React from 'react';
import BidCard from '../Cards/BidCard';
import "./gameBid.css";

const GameBid = () => {
  return (
    <>
        <section className="gameBid commonSection">
            <div className="container flex justifyCenter flexWrap">
                <BidCard price={"1.002"} creatorName={"Alax Max"} title={"WOLF GAMING ART"} image={"assets/img/bidimg_1.jpg"} />
                <BidCard price={"1.002"} creatorName={"Alax Max"} title={"FOREST PRINCESS"} image={"assets/img/bidimg_2.jpg"} />
                <BidCard price={"1.002"} creatorName={"Alax Max"} title={"GIRL FIREFLY ART"} image={"assets/img/bidimg_3.jpg"} />
                <BidCard price={"1.002"} creatorName={"Alax Max"} title={"GIRL FIREFLY ART"} image={"assets/img/bidimg_2.jpg"} />
                <BidCard price={"1.002"} creatorName={"Alax Max"} title={"GIRL FIREFLY ART"} image={"assets/img/bidimg_1.jpg"} />
            </div>
        </section>
    </>
  )
}

export default GameBid