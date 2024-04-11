import React from "react";
import Header from "./Components/Header";
import Read from "./Components/Read";
import Update from "./Components/Update";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Header/>} />
          <Route  path="/Read" element={<Read/>} />
          <Route  path="/Update" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
