import React, { useRef } from "react";
import "./community.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { GiCrossedSwords } from "react-icons/gi";

const JoinCommunity = () => {
    const ifameVideo = useRef();

    const showIframeVideo = () => {
        const video = ifameVideo.current;
        video.classList.toggle('ifameVideoShow');
    }

  return (
    <>
      <section className="ourCommunity commonSection">
        <div className="container flex justifyCenter">
          <div className="content">
            <span onClick={showIframeVideo} className="playButton">
              <AiFillPlayCircle />
            </span>
            <h2>
              JOIN THE <span className="green">COMMUNITY</span>
            </h2>
            <h5>Join our Discord community and choosec onsteur</h5>
            <a href="/" className="glButtonFill">
              <span className="flex alignCenter">JOIN DISCORD</span>
            </a>
          </div>
        </div>

        <div ref={ifameVideo} className="ifameVideo flex justifyCenter alignCenter">
          <div className="container flex justifyCenter alignCenter">
            <div onClick={showIframeVideo} className="close"><GiCrossedSwords /></div>
            <div className="frame">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/x55lAlFtXmw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinCommunity;
