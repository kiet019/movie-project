import * as React from "react";
import { UserAuth } from "../login/AuthContext";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
export default function UserHeader() {
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="header">
      <a className="switch-mode" href="/home">
        <span className="material-icons logo">movie</span>
      </a>
      <div className="search-box">
        <form>
          <input className="text-input" placeholder="Search your movie..." />
          <span className="material-icons search">search</span>
        </form>
      </div>
      <div className="login-user">
        <Box sx={{ flexGrow: 0 }}>
          {user ? (
            <button className="button-place" onClick={handleSignOut}>
              <Avatar alt={user.email} src={user.photoURL} />
            </button>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span>SIGN IN</span>
            </Link>
          )}
        </Box>
      </div>
    </div>
  );
}
