import React from "react";
import {
  Alert,
  AlertTitle,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Link } from "react-router-dom";
export default function DialogOpen({ open, handleClose, message, to }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogTitle id="responsive-dialog-title" style={{color: "black"}}>
          {"Congratulation!!"}
        </DialogTitle>
        <DialogContentText id="alert-dialog-description">
          <Alert severity="success">
            <AlertTitle>{message}!</AlertTitle>
          </Alert>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button>
          <Link to={to} style={{ textDecoration: "none", color: "#1976d2" }}>
            Home
          </Link>
        </Button>
        <Button
          autoFocus
          onClick={handleClose}
          style={{ textDecoration: "none", color: "red" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
