import React, { useEffect, useState } from "react";
import FilmsShow from "./modal/FilmsShow";
import { useParams } from "react-router-dom";

export default function Type() {
  const { type } = useParams();
  const baseURL = `https://64055d32eed195a99f80eece.mockapi.io/api/films/details`;
  let pathParam;
  const [ListOfFilms, setAPIData] = useState(null);
  // Hàm để lấy danh sách contact từ API
  useEffect(() => {
    if (type === "series") {
      pathParam = "/1";
    } else if (type === "movies") {
      pathParam = "/2";
    }
    fetch(baseURL + pathParam)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAPIData(data);
      })
      .catch((error) => console.log(error));
  }, [baseURL, pathParam, type]);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="home">
      {ListOfFilms !== null ? (
        <div>
          <FilmsShow Films={ListOfFilms} />
        </div>
      ) : null}
    </div>
  );
}
