import React from "react";
import { Link } from "react-router-dom";
import WebIcons from "../webIcons/WebIcons";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer footer-color">
      <WebIcons className="footer-item" />
      <div className="footer-items">
        <Link to="/mentionsLegales" className="mentionsLegales footer-item">
          Mentions Legales
        </Link>
        <div className="copyright footer-item">copyright@2023 Iryna Guenin</div>
        <Link to="/contact" className="footer-contact footer-item">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Footer;
