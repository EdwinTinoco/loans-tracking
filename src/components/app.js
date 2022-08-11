import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import pages
import Home from './pages/home';
import Login from './pages/login';
import About from './pages/about';
import NavigationBar from './navigation-bar/navigation-bar';
import Footer from './footer/footer';

export default function App() {
  return (
    <div className="app-container">
      <Router>
        <div>
          <NavigationBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}
