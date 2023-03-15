import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./login/Login";
import UserUI from "./userUI/UserUI";
import Protected from "./login/Protected";
import AdminUI from "./adminUI/AdminUI";
import HomePage from "./userUI/userComponents/HomePage";
import Type from "./userUI/userComponents/Type";
import Details from "./userUI/userComponents/modal/Details";
import Contact from "./userUI/userComponents/Contact";
import About from "./userUI/userComponents/About";
import News from "./userUI/userComponents/News";
import ShowFilm from "./adminUI/adminComponents/ShowFilm";
import AddFilm from "./adminUI/adminComponents/AddFilm";
import UpdateFilm from "./adminUI/adminComponents/UpdateFilm";
import ShowContact from "./userUI/userComponents/ShowContact";
export default function Router() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<UserUI Children={<HomePage/>}/>}/>
        <Route path="/films/:type" element={<UserUI Children={<Type/>}/>}/>
        <Route path="/about" element={<UserUI Children={<About/>}/>}/>
        <Route path="/news" element={<UserUI Children={<News/>}/>}/>
        <Route path="/film/details" element={<UserUI Children={<Details/>}/>}/>
        <Route path="/login" element={<UserUI Children={<Login />}/>} />
        <Route path="/contact" element={<Protected><UserUI Children={<Contact/>}/></Protected>}/>
        <Route path="/show-contact" element={<Protected><UserUI Children={<ShowContact/>}/></Protected>}/>
        <Route path="/dashboard" element={<Protected><AdminUI Children={<ShowFilm/>}/></Protected>} />
        <Route path="/film/add" element={<Protected><AdminUI Children={<AddFilm/>}/></Protected>} />
        <Route path="/film/update" element={<Protected><AdminUI Children={<UpdateFilm/>}/></Protected>} />
      </Routes>
    </>
  );
}
