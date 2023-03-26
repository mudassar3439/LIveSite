import React from "react";
import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./index.css"
import About from "./About";
import Nav from "./Nav";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact"
import Error from "./Error";
import LiveSite from "./LiveSite";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return(
    <>
      <Nav />
      <Routes>
        <Route path="/" exact='true' element={<Home/>}/>
        <Route path="mudassar3439.github.io" exact='true' element={<Home/>}/>
        <Route path="/LiveSite" exact='true' element={<LiveSite/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path="/Contact" exact="true" element={<Contact name='Contact-Us'/>} />
        <Route path='/Service' element={<Service/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App;

