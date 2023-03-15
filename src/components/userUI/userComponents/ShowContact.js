import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../../login/AuthContext";
import EmailIcon from "@mui/icons-material/Email";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function ShowContact() {
  const [contacts, setContact] = useState([]);
  const { user } = UserAuth();
  const favorList = useSelector((state) => state.favors.value);
  const baseURL = new URL(
    "https://64048c453bdc59fa8f3b5897.mockapi.io/api/films/contact"
  );
  baseURL.searchParams.append("usercode", user.uid);
  useEffect(() => {
    fetch(baseURL, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setContact(data);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h2 style={{ marginBottom: "10px" }}>Welcome {user.displayName}</h2>
      <div className="profile">
        <div className="wishlist">
          <h3>
            <span className="material-icons">favorite</span>Your favorite list
          </h3>
          <div
            className="show-favor"
            style={{
              gridTemplateRows: `repeat(` + favorList.length + `, 200px)`,
            }}
          >
            {favorList.map((favor, key) => (
              <div
                key={key}
                className="card"
                onClick={() => {
                  localStorage.setItem("id", favor.id);
                  localStorage.setItem("image", favor.image);
                  localStorage.setItem("title", favor.title);
                  localStorage.setItem("Year", favor.Year);
                  localStorage.setItem("director", favor.director);
                  localStorage.setItem("time", favor.time);
                  localStorage.setItem("trailer", favor.trailer);
                  localStorage.setItem("resolution", favor.resolution);
                  localStorage.setItem("information", favor.information);
                }}
              >
                <Link to="/film/details">
                  <img src={favor.image} alt="" />
                  <div className="title">{favor.title}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="contact">
          <h3>
            <span className="material-icons">email</span>Your contact
          </h3>
          <div
            className="view-contact"
            style={{
              gridTemplateRows: `repeat(` + contacts.length + `, 450px)`,
            }}
          >
            {contacts.length > 0
              ? contacts.map((contact) => (
                  <div
                    className="contact-card"
                    key={contact.id}
                    style={{
                      border: `2px solid ${contact.status ? "green" : "red"}`,
                    }}
                  >
                    <div className="message">
                      <div className="title">
                        We got it - RE: {contact.title}
                      </div>
                      <div style={{ padding: "10px", color: "#cccccc" }}>
                        to - {contact.email}
                      </div>
                      <div className="content">
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          multiline
                          rows={10}
                          fullWidth
                          value={contact.note}
                          name="message"
                        />
                      </div>
                      <div
                        style={{
                          padding: "0px 10px",
                          color: "#cccccc",
                          alignItems: "center",
                        }}
                      >
                        For more Support, please send email directly to{" "}
                        <br></br>
                        <a
                          style={{ display: "flex", alignItems: "center" }}
                          href="/"
                        >
                          <EmailIcon />
                          Email: suport@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
