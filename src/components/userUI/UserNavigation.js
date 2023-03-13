import React from "react";
import { Link } from "react-router-dom";

export default function UserNavigation() {
  return (
    <div className="navigation">
      <nav>
        <ul className="ul-nav">
          <li className="first">
            <span className="material-icons nav">menu</span>
            <div className="text">Menu</div>
          </li>
          <Link to="/home">
            <li>
              <span className="material-icons nav">home</span>
              <div className="text">Home</div>
            </li>
          </Link>
          <Link to="/films/series">
            <li>
              <span className="material-icons nav">live_tv</span>
              <div className="text">Series</div>
            </li>
          </Link>
          <Link to="/films/movies">
            <li>
              <span className="material-icons nav">movie</span>
              <div className="text">Movies</div>
            </li>
          </Link>
          <Link to="/contact">
            <li>
              <span className="material-icons nav">contact_support</span>
              <div className="text">Contact</div>
            </li>
          </Link>
          <Link to="/news">
            <li>
              <span className="material-icons nav">feed</span>
              <div className="text">News</div>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <span className="material-icons nav">info</span>
              <div className="text">About Us</div>
            </li>
          </Link>
          <Link to="/account">
            <li>
              <span className="material-icons nav">manage_accounts</span>
              <div className="text">Accounts</div>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
