import { useState, useEffect } from "react";
import React from "react";

const initialState = {
  next: () => {},
  back: () => {},
};
const SwitchContext = React.createContext(initialState);
function SwitchProvider({ children }) {
  // let banners = require("../../shared/ListOfBanners.json")
  const [banners, setAPIData] = useState([]);
  const baseURL = `https://64048c453bdc59fa8f3b5897.mockapi.io/api/films/banner`;
  useEffect(() => {
    fetch(baseURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAPIData(data);
      })
      .catch((error) => console.log(error.message));
      // eslint-disable-next-line
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);
  const [index, setIndex] = useState(1);
  useEffect(() => {
    if (index <= 0 || index >= banners.length - 1) {
      setIndex(1);
    }
  }, [index, banners.length]);
  const back = () => {
    setIndex(index - 1);
  };
  const next = () => {
    setIndex(index + 1);
  };
  return (
    <SwitchContext.Provider value={{ index, banners, back, next }}>
      {children}
    </SwitchContext.Provider>
  );
}
export { SwitchProvider, SwitchContext };
