import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../../login/AuthContext";

export default function ShowContact() {
  const [contacts, setContact] = useState([]);
  const { user } = UserAuth();
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
  }, []);
  return (
    <>
      <h2>Welcome {user.displayName}</h2>
      <div
        className="show-contact"
        style={{ gridTemplateRows: `repeat(` + contacts.length + `, 400px)` }}
      >
        {contacts.length > 0
          ? contacts.map((contact) => (
              <div className="contact-card" key={contact.id}>
                {/* 
                <div style={{ color: "white" }}>Title {contact.title}</div>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  multiline
                  rows={10}
                  fullWidth
                  value={contact.message}
                  name="message"
                /> */}
                <div class="message">
                <h2>
                  Title: {contact.title}
                </h2>
                  <div class="content">
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      multiline
                      rows={10}
                      fullWidth
                      value={contact.message}
                      name="message"
                    />
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
}
