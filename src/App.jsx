import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import 'bootstrap/dist/css/bootstrap.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import Weather from "./Pages/api/Weather";
import Shopping from "./Pages/api/Shopping";
import Movies from "./Pages/api/Movies";
import Food from "./Pages/api/Food";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div className="container mt-4"><About /></div>} />

          <Route path="/weather" element={<div className="container mt-4"><Weather /></div>} />
          <Route path="/shopping" element={<div className="container mt-4"><Shopping /></div>} />
          <Route path="/movies" element={<div className="container mt-4"><Movies /></div>} />
          <Route path="/food" element={<div className="container mt-4"><Food/></div>} />

        
          <Route path="/contact" element={<div className="container mt-4"><Contact /></div>} />

        </Routes>

      <Footer />
    </BrowserRouter>
  );
}