
import React, { useEffect, useState } from "react";
import ModalCase from "./ModalCase";

export default function Details() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isOpen]);

  return (
    <div className="details">
      <img src={"../../" + localStorage.getItem("image")} alt="" />
      <div className="content">
        <h3>Name: {localStorage.getItem("title")}</h3>
        <div className="text year">Year: {localStorage.getItem("Year")}</div>
        <div className="text director">
          Director: {localStorage.getItem("director")}
        </div>
        <div
          className="text time_reso"
          style={{
            display: "flex",
            alignItems: "center",
            paddingRight: "100px",
          }}
        >
          <span className="material-icons">schedule</span>
          {localStorage.getItem("time")}
          <> </>
          <span className="material-icons">high_quality</span>
          {localStorage.getItem("resolution")}
        </div>
        <div className="text infor"> Description: </div>
        <div className="text" style={{ textAlign: "justify" }}>
          {localStorage.getItem("information")}
        </div>
      </div>
      {/* eslint-disable-next-line */}
      <button onClick={() => setIsOpen(true)} className="open-modal">
        <span class="material-icons">ondemand_video</span>
      </button>
      {isOpen && <ModalCase setIsOpen={setIsOpen} />}
    </div>
  );
}
