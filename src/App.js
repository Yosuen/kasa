import React from 'react';
import { BrowserRouter, UseParams, Routes, Route } from "react-router-dom"
import About from './pages/about';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
// import  "./styles/"

// function GetId() {
//   let { id } = UseParams();
// }

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