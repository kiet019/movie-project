import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./login/Login";
import UserUI from "./userUI/UserUI";
import Protected from "./login/Protected";
import AdminUI from "./adminUI/AdminUI";
import HomePage from "./userUI/userComponents/HomePage";
import Type from "./userUI/userComponents/Type";
import Details from "./userUI/userComponents/modal/Details";
import Contact from "./userUI/Contact";
import About from "./userUI/About";
export default function Router() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<UserUI Children={<HomePage/>}/>}/>
        <Route path="/films/:type" element={<UserUI Children={<Type/>}/>}/>
        <Route path="/contact" element={<UserUI Children={<Contact/>}/>}/>
        <Route path="/about" element={<UserUI Children={<About/>}/>}/>
        <Route path="/film/details" element={<UserUI Children={<Details/>}/>}/>
        <Route path="/admin" element={<Protected><AdminUI /></Protected>} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </>
  );
}
