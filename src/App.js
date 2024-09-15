import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import About from './Pages/About';  // Importa o componente da pasta pages
import Home from './Pages/Home';


function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
