import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function FilmsShow({ Films }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="films-container">
      <div className="title">{Films.ms}</div>
      <div className="films-list">
        {Films.list.map((film) => (
          <div className="card" key={film.id}>
            <img src={"../" + film.image} alt={film.id}/>
            <div className="overload" >
              <button className="button" onClick={() => {
                localStorage.setItem("id", film.id)
                localStorage.setItem("image", film.image)
                localStorage.setItem("title", film.title)
                localStorage.setItem("Year", film.Year)
                localStorage.setItem("director", film.director)
                localStorage.setItem("time", film.time)
                localStorage.setItem("trailer", film.trailer)
                localStorage.setItem("resolution", film.resolution)
                localStorage.setItem("information", film.information)
              }}>
                <Link to= "/film/details"><span  className="material-icons detail">play_arrow</span></Link>
              </button>
            </div>
            <div className="content" >
              <div className="header-name" ></div>
              <div className="name" >
                {film.title} ({film.Year})
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
