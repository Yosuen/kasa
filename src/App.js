import React, { useEffect, useState } from 'react';
import { BrowserRouter, useParams, Routes, Route } from "react-router-dom"
import About from './pages/About';
import FicheLogement from './pages/FicheLogement';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import  "./styles/index.scss"
import logements from "./assets/dataset/logements.json"

const App = () => {
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