import React, { useContext } from 'react';
import pizzasData from './pizzas.json';
import { useParams } from 'react-router-dom';
import './Pizza.css'; // Importa tu archivo de estilos CSS
import { CompraContext } from '../context/CompraContext';

const Pizza = () => {
  const { name } = useParams();
  const pizza = pizzasData.find(pizza => pizza.name === name);
  const { agregarPrecio, agregarPizzaSeleccionada } = useContext(CompraContext);

  const handleClickAgregar = (pizza) => {
    agregarPrecio(pizza.price);
    agregarPizzaSeleccionada(pizza);
  };

  if (!pizza) {
    return <div>No se encontró la pizza</div>;
  }

  return (
    <div className="pizza-container">
      <img className="pizza-image" src={pizza.img} alt={pizza.name} />
      <div className="pizza-content">
        <h2 className="pizza-title" style={{ textTransform: 'capitalize' }}>{pizza.name}</h2>
        <hr />
        <p className="pizza-description">{pizza.desc}</p>
        <p><strong>Ingredientes:</strong></p>
        <ul className="pizza-ingredients">
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>🍕{ingredient}</li>
          ))}
        </ul>
        <div className="pizza-price">
          <h2>Precio: ${pizza.price}</h2>
          <button className="btn btn-danger" onClick={() => handleClickAgregar(pizza)}>Añadir al carrito 🛒</button>
         </div>
      </div>
    </div>
  );
};

export default Pizza;


