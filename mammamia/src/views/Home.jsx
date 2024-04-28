import React, { useContext } from 'react'; 
import { Link } from 'react-router-dom';
import pizzasData from './pizzas.json';
import { CompraContext } from "../context/CompraContext"; 

const Home = () => {
  const { agregarPrecio, agregarPizzaSeleccionada } = useContext(CompraContext);

  const handleClickAgregar = (pizza) => {
    agregarPrecio(pizza.price);
    agregarPizzaSeleccionada(pizza);
  };
 
  return (
    <>
      <div className="contenedor">
        <div className="subtitulo">
          <br />
          <h1>¡Pizzería Mamma Mia!</h1>
          <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
          <hr />
          <br />
          
        </div>
      </div>

      <div className="row justify-content-center centro">
        {pizzasData.map((pizza) => (
          <div key={pizza.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card" style={{ width: '17rem' }}>
            <Link to={`/pizza/${pizza.name}`}>
              <img className="card-img-top" src={pizza.img} alt={pizza.name} />
              </Link>
              <div className="card-body">
              <Link to={`/pizza/${pizza.name}`}>
                <h5 className="card-title text-black" style={{ textTransform: 'capitalize' }}>{pizza.name}</h5>
                </Link>
                <hr />
                <p><strong>Ingredientes:</strong></p>
                <ul className="list-group-flush">
                  {pizza.ingredients.map((ingredient, index) => (
                    <li key={index} className="list-group-item">🍕{ingredient}</li>
                  ))}
                </ul>
                <div className="card-price">
                  <hr />
                  <h3 className="card-text text-center">$ {pizza.price.toLocaleString()}</h3>
                </div>
                <br />
                <div className="button-container d-flex justify-content-between">
                  <Link to={`/pizza/${pizza.name}`} className="btn btn-info text-white">Ver Más 👀</Link>
                  <button className="btn btn-danger" onClick={() => handleClickAgregar(pizza)}>Añadir 🛒</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

