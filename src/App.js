import React from 'react';
import { BrowserRouter, useParams, Routes, Route } from "react-router-dom"
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import  "./styles/index.scss"

function GetId() {
  let { id } = useParams();
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path="*" element={<NotFound/>} /> 
        {/* path="*" permet d'aller en 404 si l'url ne correspond à rien au dessus */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;