import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; 
import Popular from "./pages/Popular";  
import Topicos from "./pages/Topicos";
import Inicio from "./pages/Inicio";       
import "./app.scss";                 

function App() {
  return (
    <Router>
      <Header /> {}
      <Routes>
        <Route path="/" element={<Inicio />} /> {/* Página Inicial */}
        <Route path="/popular" element={<Popular />} /> {/* Página Popular */}
        <Route path="/topicos" element={<Topicos />} /> {/* Página Tópicos */}
      </Routes>
    </Router>
  );
}

export default App;
