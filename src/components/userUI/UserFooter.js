import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <Link to="/">Home Page</Link>
              <Link to="/about">About Us</Link>
              <Link to="/">Service</Link>
              <Link to="/">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
