import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './pages/About';
import FicheLogement from './pages/FicheLogement';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import "./styles/index.scss"

const App = () => {
  const [logements, setLogements] = useState([]);
  useEffect(() => {
    {/* fetch asynchrone afin de pouvoir acceder directement aux fiches logements */}
    async function fetchData() {
      const res = await fetch("http://localhost:3000/logements.json")
        const jsonRes = await res.json();
        const temp = await jsonRes;
        setLogements(temp);
      }
    fetchData();
  }, []);
  if (logements.length !== 0) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home logements={logements} />} />
          <Route path='/about' element={<About />} />
          <Route path='/fiche-logement/:id' element={<FicheLogement logements={logements} />} />
          <Route path="*" element={<NotFound />} />
          {/* path="*" permet d'aller en 404 si l'url ne correspond à rien au dessus */}
        </Routes>
      </BrowserRouter>
    );
  } else {
    <p>waiting for fetch</p>
  }
};

export default App;