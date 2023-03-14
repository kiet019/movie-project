import React, { useEffect, useState } from 'react'
import Banner from './modal/Banner'
import FilmsShow from './modal/FilmsShow'


export default function HomePage() {
  const baseURL = 'https://64055d32eed195a99f80eece.mockapi.io/api/films/details'
  const [ListOfFilms, setAPIData] = useState([]);
  const fetchContacts = () => {
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
      .catch((error) => console.log(error));
  };
  // Hàm để lấy danh sách contact từ API
  useEffect(() => {
    fetchContacts();
    
  }, []);
  return (
    <div className='home'>
        <Banner/>
        {ListOfFilms.length > 0?  ListOfFilms.map((Films) => (
          <FilmsShow Films={Films} key={Films.id}/>
        )) : null}
    </div>
  )
}
