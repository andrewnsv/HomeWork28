import React from "react";
import HeroEpisod from "./components/HeroEpisod";
import HeroCard from "./components/HeroCard";
import HomePage from "./components/HomePage";
import HeroDetails from "./components/HeroDetails";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="episodes" element={<HeroEpisod />} />
          <Route path="heroes" element={<HeroCard />} />
          <Route path="heroes/hero" element={<HeroDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
