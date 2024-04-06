import React from 'react'
import NavBar from './NavBar'
import { Button } from "react-bootstrap";

function Contacto() {
  return (
    <div>
      <NavBar />
      <div className="text-center">
        <br />
        <h2>Cuéntanos, ¿en qué te podemos ayudar?</h2>
        <p>Correo:</p>
        <input type="email" style={{ width: "60%" }} placeholder='name@example.com' />
        <br />
        <br />
        <p>Descripción</p>
        <textarea style={{ width: "60%" }} rows="4"></textarea>
        <br />
        <br />
        <Button variant="danger">Enviar</Button>




      </div>
    </div>
  )
}

export default Contacto
