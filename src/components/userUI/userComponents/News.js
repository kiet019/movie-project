import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
export default function News() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    console.log("Current page:", value);
    setPage(value);
    // call API with the current page value
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    const url = new URL(
      "https://640fb835864814e5b63e38dc.mockapi.io/api/news/getNews"
    );
    url.searchParams.append("page", page);
    url.searchParams.append("limit", 5);
    fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((data) => {
        setNews(data);
        // mockapi returns first 10 tasks that are not completed
      })
      .catch((error) => {
        // handle error
      });
    // eslint-disable-next-line
  }, [page]);
  return (
    <>
      <h2>News</h2>
      <div className="news">
        {news.length > 0
          ? news.map((news) => (
              <div className="card" key={news.id}>
                 {/* eslint-disable-next-line */}
                <a
                  style={{ display: "flex", textDecoration: "none"}}
                  href="https://www.cinemablend.com/superheroes/flash/5-reasons-why-even-this-dceu-hater-is-pumped-for-the-new-flash-movie"
                  target="_blank"
                >
                  <img src={news.img} alt="" />
                  <div className="content">
                    <div className="title">{news.title}</div>
                    <div className="by">{news.by}</div>
                    <div className="infor">{news.description}</div>
                  </div>
                </a>
              </div>
            ))
          : null}
      </div>
      <Pagination count={2} color="primary" onChange={handlePageChange} />
    </>
  );
}
