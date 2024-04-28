import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { CompraContext } from '../context/CompraContext';
import './Carrito.css'; 

const Carrito = () => {
  const { pizzasSeleccionadas, setPizzasSeleccionadas, counter, setCounter } = useContext(CompraContext);

  const decrementarCantidad = (index) => {
    const nuevasPizzasSeleccionadas = [...pizzasSeleccionadas];
    // Verifica que la cantidad no sea menor que 0
    if (nuevasPizzasSeleccionadas[index].cantidad > 0) {
      nuevasPizzasSeleccionadas[index].cantidad--;
      setPizzasSeleccionadas(nuevasPizzasSeleccionadas);
      // Actualiza el contador global
      setCounter((prevCounter) => prevCounter - nuevasPizzasSeleccionadas[index].price);
    }
  };

  const incrementarCantidad = (index) => {
    const nuevasPizzasSeleccionadas = [...pizzasSeleccionadas];
    nuevasPizzasSeleccionadas[index].cantidad++;
    setPizzasSeleccionadas(nuevasPizzasSeleccionadas);
    // Actualiza el contador global
    setCounter((prevCounter) => prevCounter + nuevasPizzasSeleccionadas[index].price);
  };

  return (
    <div className='carritodiv'>
      <h2>Detalles del pedido:</h2>
      
      {pizzasSeleccionadas.map((pizza, index) => (
        <div key={index} className="pizza-item pizza-details">
          <Link to={`/pizza/${pizza.name}`}> 
            <div className="pizza-info">
              <img className="pizza-image2" src={pizza.img} alt={pizza.name} />
              <p style={{ textTransform: 'capitalize' }}><strong>{pizza.name}</strong></p>
            </div>
          </Link>
          <div className="pizza-price">
            <p> ${(pizza.price * pizza.cantidad).toLocaleString()}</p>
            <button className="btn btn-danger" onClick={() => decrementarCantidad(index)}>-</button>
            <span className='cantidades'>{pizza.cantidad}</span>
            <button className="btn btn-primary" onClick={() => incrementarCantidad(index)}>+</button>
          </div>
         
        </div>
      ))}
      
      <hr />
      <h3>Total: ${counter.toLocaleString()}</h3>
      <br />
      <button className="btn btn-success">Ir a pagar</button>
    </div>
  );
};

export default Carrito;

