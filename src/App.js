import React, { useEffect, useState } from 'react';
import { BrowserRouter, useParams, Routes, Route } from "react-router-dom"
import About from './pages/About';
import FicheLogement from './pages/FicheLogement';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import  "./styles/index.scss"
import logements from "./assets/logements.json"





const App = () => {
  console.log(logements)
  // const [logements, setLogements] = useState([  ])
  // useEffect(() => {
  //   fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json")
  //       .then((response) => {
  //           return response.json();
  //       })
  //       .then((data) => {
  //         setLogements(data)
  // })})
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/fiche-logement/:id' element={<FicheLogement />} />
        <Route path="*" element={<NotFound/>} /> 
        {/* path="*" permet d'aller en 404 si l'url ne correspond à rien au dessus */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;