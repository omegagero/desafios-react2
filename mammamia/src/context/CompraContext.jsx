import React, { createContext, useState } from 'react';

export const CompraContext = createContext();

const CompraProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [pizzasSeleccionadas, setPizzasSeleccionadas] = useState([]);

  const agregarPrecio = (precio) => {
    setCounter((prevCounter) => prevCounter + precio);
  };

  const agregarPizzaSeleccionada = (pizza) => {
    const pizzaExistente = pizzasSeleccionadas.find((p) => p.name === pizza.name);

    if (pizzaExistente) {
      const nuevasPizzas = pizzasSeleccionadas.map((p) =>
        p.name === pizza.name ? { ...p, cantidad: p.cantidad + 1 } : p
      );
      setPizzasSeleccionadas(nuevasPizzas);
    } else {
      setPizzasSeleccionadas([...pizzasSeleccionadas, { ...pizza, cantidad: 1 }]);
    }
  };

  const value = {
    counter,
    setCounter,
    pizzasSeleccionadas,
    setPizzasSeleccionadas,
    agregarPrecio,
    agregarPizzaSeleccionada,
  };

  return <CompraContext.Provider value={value}>{children}</CompraContext.Provider>;
};

export default CompraProvider;
