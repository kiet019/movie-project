import { Badge } from "@mui/material";
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
          <Link to="/contact">
            <li>
              <span className="material-icons nav">contact_support</span>
              <div className="text">Contact</div>
            </li>
          </Link>
          <Link to="/show-contact">
            <li>
              <Badge badgeContent={4} color="primary">
                <span className="material-icons nav">mail</span>
              </Badge>
              <div className="text">Notification</div>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
