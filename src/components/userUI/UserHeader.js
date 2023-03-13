import React from "react";
import { UserAuth } from "../login/AuthContext";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
export default function UserHeader() {
  const { user, logOut } = UserAuth();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="button-place">
            <Badge badgeContent={4} color="primary">
            <span className="material-icons login">mail</span>
            </Badge>
          </button>
        </Link>
        <Box sx={{ flexGrow: 0 }}>
          {user?.displayName ? (
            <div>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.email} src={user.photoURL} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link to="/" style={{ textDecoration: "none" }}>
                      Home
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center" onClick={handleSignOut}>
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className="button-place">
                <span className="material-icons login">account_circle</span>
              </button>
            </Link>
          )}
        </Box>
      </div>
    </div>
  );
}
