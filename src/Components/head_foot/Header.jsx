import React, { useRef } from "react";
import "./header.css";
import Nav from "../navigation/Nav";
import { BiSearchAlt2 } from "react-icons/bi";
import { TbEditCircle } from "react-icons/tb";
import { RiSendPlane2Fill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { GiCrossedSwords } from "react-icons/gi";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Header = () => {
  const sideBar = useRef();
  const sideBarFull = useRef();
  const searchBox = useRef();
  const headerMain = useRef();

  window.onscroll = function() {scrollFunction()};
  const mainHeader = headerMain.current;

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mainHeader.classList.add('scrollHeader');
  } else {
    mainHeader.classList.remove('scrollHeader');
  }
}

  const togleSideBar = () => {
    const workSideBar = sideBar.current;
    const workSideBarBlack = sideBarFull.current;
    workSideBar.classList.toggle("ShowSideBar");
    workSideBarBlack.classList.toggle("wholeScreenShow");
  };
  const togleSearchBox = () => {
    const searchBoxEle = searchBox.current;
    searchBoxEle.classList.toggle("showSearchBox");
  };

  return (
    <>
      <header ref={headerMain}>
        <div className="container flex alignCenter justifySpaceBet">
          <div className="logo">
            <a href="/">
              <img src="assets/img/logo.png" alt="" />
            </a>
          </div>
          <Nav />
          <div className="menues flex alignCenter">
            <span onClick={togleSearchBox} className="search flex alignCenter">
              <BiSearchAlt2 />
            </span>
            <a className="glButtonBorder flex alignCenter" href="/">
              <TbEditCircle /> ~Sign In
            </a>
            <div onClick={() => togleSideBar()} className="bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div
          onClick={() => togleSideBar()}
          ref={sideBarFull}
          className="wholeScreen"
        ></div>
        <div ref={sideBar} className="headerSideBar">
          <div className="logo">
            <span onClick={() => togleSideBar()} className="swordClose">
              <GiCrossedSwords />
            </span>
            <a href="/">
              <img src="assets/img/logo.png" alt="" />
            </a>
          </div>
          <div className="content">
            <h3>
              BEST SELLER OF MONTH IDEAS FOR <span>NFT WALLET</span>
            </h3>

            <div className="contact commonSideCard">
              <h5>CONTACT US</h5>
              <p className="flex alignCenter">
                <span></span> <a href="tel:93332225557">+9 333 222 5557</a>
              </p>
              <p className="flex alignCenter">
                <span></span>{" "}
                <a href="mailto:info@webmail.com">info@webmail.com</a>
              </p>
              <p className="flex alignCenter">
                <span></span> New Central Park W7 Street ,New York
              </p>
            </div>
            <div className="subscribe commonSideCard">
              <h5>SUBSCRIBE</h5>
              <form action="/">
                <input type="text" placeholder="Get News & Updates" />
                <button className="flex alignCenter">
                  <RiSendPlane2Fill />
                </button>
              </form>
              <p>
                Subscribe dolor sitamet, consectetur adiping eli. Duis esollici
                tudin augue.
              </p>
            </div>

            <div className="socal commonSideCard">
              <a href="/">
                <BsTwitter />
              </a>
              <a href="/">
                <FaFacebookF />
              </a>
              <a href="/">
                <FaLinkedinIn />
              </a>
              <a href="/">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="sideFoot">
            <p>
              COPYRIGHT © 2023 - BY <span>SHASHIKANT</span>
            </p>
          </div>
        </div>
      </header>
      <div className="searchBox" ref={searchBox}>
        <div className="container flex justifyCenter alignCenter">
          <span onClick={togleSearchBox} className="searchBoxClose"><GiCrossedSwords /></span>
          <div className="content">
            <h2 className="textGreenShadow">... SEARCH HERE ...</h2>
            <form action="/">
              <input type="text" placeholder="Type Keyword Here" />
              <button type="submit">
                <BiSearchAlt2 />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
