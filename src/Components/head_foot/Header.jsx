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
  const togleSideBar = () => {
    const workSideBar = sideBar.current;
    workSideBar.classList.toggle("ShowSideBar");
    console.log(workSideBar.classList);
  }

  return (
    <>
      <header>
        <div className="container flex alignCenter justifySpaceBet">
          <div className="logo">
            <a href="/">
              <img src="assets/img/logo.png" alt="" />
            </a>
          </div>
          <Nav />
          <div className="menues flex alignCenter">
            <span className="search flex alignCenter">
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
        <div className="wholeScreen">
          <div ref={sideBar} className="headerSideBar">
            <div className="logo">
              <span
                onClick={() => togleSideBar()}
                className="swordClose"
              >
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
                  Subscribe dolor sitamet, consectetur adiping eli. Duis
                  esollici tudin augue.
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
        </div>
      </header>
    </>
  );
};

export default Header;
