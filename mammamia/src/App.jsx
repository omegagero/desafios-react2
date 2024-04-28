import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'; // Importa Routes y Route desde react-router-dom
import Home from './views/Home';
import Pizza from './views/Pizza';
import Header from './components/Header';
import Carrito from './components/Carrito'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:name" element={<Pizza />} />
        <Route path="/components/carrito" element={<Carrito />} />
      </Routes>
    </>
  );
};

export default App;




// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './views/Home';
// import Pizza from './views/Pizza';
// import Header from './components/Header';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const App = () => {
//   return (
//     <>
//        <Header />
//        <Home />
//        </>
//   );
// };

// export default App;
