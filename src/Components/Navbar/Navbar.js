import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { Button } from "../Button/Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleMenuClick = () => {
    setClick(!click);
  }
  const closeMobileMenu = () => {
    setClick(false);
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    }
    else {
      setButton(true);
    }
  }

  useEffect(() => {
     showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbarContainer">
          <Link 
            to="/" 
            className="navbarLogo" 
            onClick={closeMobileMenu}>
              NICK MARTINEZ <i className="fas fa-barcode"></i>
          </Link>

          <div className="menuIcon" onClick={handleMenuClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "navMenu active" : "navMenu"}>
            <li className="navItem">
              <Link 
                to="/" 
                className="navLink" 
                onClick={closeMobileMenu}> 
                  Home
              </Link>
            </li>
            <li className="navItem">
              <Link 
                to="/projects" 
                className="navLink" 
                onClick={closeMobileMenu}> 
                  Projects
              </Link>
            </li>

            <li>
              <Link 
                to="/resume" 
                className="navLinkMobile" 
                onClick={closeMobileMenu}> 
                  Resume
              </Link>
            </li>   
          </ul>        
          {button && <Button btnStyle="btnOutline">Resume</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
