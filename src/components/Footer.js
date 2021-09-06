import React from "react";
import "./footer.css";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
//import CopyrightIcon from "@material-ui/icons/Copyright";

const Footer = () => {
  return (
    <div className="footer__main">
      <footer className="footer">
        <p>
          © 2021 |
          <a href="https://wa.me/">
            <WhatsAppIcon className="whatsapp-icon" />
          </a>
          <a href="https://www.instagram.com/">
            <InstagramIcon className="instagram-icon" />
          </a>
          <a href="https://www.facebook.com/">
            <FacebookIcon className="facebook-icon" />
          </a>
          |All rights reserved{" "}
          <a className="no-text-decoration" href="ww">
            BHARATH PHOTOGRAPHY
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
