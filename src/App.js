import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link,Routes } from "react-router-dom";

import Home from "./Routes/Home";
import CoinPage from "./Routes/CoinPage";


export default function App() {
  return (
    <div className="Appxzx">
      <Router>
        <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/CoinPage/:id" element={<CoinPage/>}  />
        </Routes>
      </Router>
    </div>
  );
}


