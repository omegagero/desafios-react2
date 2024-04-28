import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import PokemonDetail from "./views/PokemonDetail";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones/*" element={<Pokemones />} />
        <Route path="/pokemon/:nombre" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
};

export default App;

