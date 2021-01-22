import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerLinks">
        <div className="footerLinksWrapper">
          <div class="footerLinksItems">
            <h2>Misc.</h2>
            <Link to='/'>Email: nckmartnez@gmail.com</Link>
            <a
              href="https://github.com/nick-martinez"
              target="_blank">
              GitHub
            </a>
          </div>
        </div>
        <div className="footerLinksWrapper">
          <div class="footerLinksItems">
            <h2>Social Media</h2>
            <a 
              href="https://www.instagram.com/nckmartnez/"
              target="_blank">
              Instagram
            </a>
            <a 
              href='https://www.facebook.com/nick.martinez.904750/'
              target="_blank">
              Facebook
            </a>
            <a 
              href="https://twitter.com/nckmartnez"
              target="_blank">
              Twitter
            </a>
            <a 
              href='https://www.linkedin.com/in/nick-martinez-63709a148/'
              target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
