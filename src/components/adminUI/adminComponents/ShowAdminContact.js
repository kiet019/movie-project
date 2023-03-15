import React, { useEffect, useState } from "react";

export default function ShowAdminContact() {
  const [contacts, setContact] = useState([]);
  const baseURL = new URL(
    "https://64048c453bdc59fa8f3b5897.mockapi.io/api/films/contact"
  );
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
    <div className="show-admin-contact">
      <h2>Contact</h2>
      {contacts.length > 0 ? (<div className="contact" style={{gridTemplateRows: `repeat(`+ contacts.length + `, 200px)`}}>
        {contacts.map((contact) => (
          <div className="card">
            <div className="data">{JSON.stringify(contact)}</div>
            <div className="reply"></div>
          </div>
        ))}
      </div>): null}
    </div>
  );
}
