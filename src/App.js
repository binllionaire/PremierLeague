import logo from './logo.svg';
import React from "react";
import './App.css';
import { MainPage } from "./Pages/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<MainPage />}></Route>
    </Routes>
    </Router>
  );
}

export default App;
