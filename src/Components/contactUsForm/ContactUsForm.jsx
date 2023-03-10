import React from "react";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import "./contactUs.css";

const ContactUsForm = () => {
  return (
    <>
      <div className="contactUs commonSection">
        <div className="container flex">
          <div className="content">
            <h6>CONTACT US AND FIND YOUR MYKD</h6>
            <p>
              Axcepteur sint occaecat atat non proident, sunt culpa officia
              deserunt mollit anim id est labor umLor emdolor
            </p>
            <h4 className="flex alignCenter">
              <span className="flex green">
                <BsFillCaretLeftFill />
              </span>
              <BsFillCaretRightFill /> <span className="text">INFORMATION</span>
            </h4>
            <p>
              <a href="tel: +971 333 222 557">+971 333 222 557</a>
            </p>
            <p>
              <a href="mailto: info@exemple.com">info@exemple.com</a>
            </p>
            <p>New Central Park W7 Street, New York</p>
          </div>

          <div className="form">
            <form action="/">
                <div className="two flex">
                    <input type="text" placeholder="Enter Your Name*" />
                    <input type="text" placeholder="Enter Your Email*" />
                </div>
                <textarea name="message" id="" cols="30" rows="10" placeholder="Enter Your Message"></textarea>

                <button className="submitButton" type="submit">SUBMIT NOW</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsForm;
