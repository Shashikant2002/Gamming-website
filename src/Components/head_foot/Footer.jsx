import React from 'react';
import "./footer.css";
import { HiChevronDoubleRight } from 'react-icons/hi';

const Footer = () => {
  return (
    <>
        <footer className="footer commonSection">
            <div className="container">
                <div className="col">
                    <div className="logo">
                        <img src="assets/img/logo.png" alt="" />
                    </div>
                    <p>Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin augue euismod. Nulla ullam dolor sitamet consectetur</p>
                    <h3 className='flex alignCenter'>ACTIVE &nbsp <span>WITH US</span> <HiChevronDoubleRight /></h3>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer