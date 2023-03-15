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
      // eslint-disable-next-line 
  }, []);
  return (
    <>
      <h2>Welcome {user.displayName}</h2>
      <div
        className="show-contact"
        style={{ gridTemplateRows: `repeat(` + contacts.length + `, 450px)` }}
      >
        {contacts.length > 0
          ? contacts.map((contact) => (
              <div className="contact-card" key={contact.id} style={{border: `2px solid ${contact.status ? "green" : "red"}`}}>
                <div className="message">
                <h4>
                  We got it - RE: {contact.title}
                </h4>
                  <div className="content">
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
