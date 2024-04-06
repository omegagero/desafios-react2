import React from 'react'
import NavBar from './NavBar'
import './Home.css'

function Home() {
  return (
    <div className="home1">
        <NavBar />
        <br />
        <div className="home-2">
            <div >
      <h1>Bienvenido a <span className='title-h1'>Happy Cake</span></h1></div>
      <p>El lugar de los pasteles felices</p>
      <h1>🎂</h1>
      </div>

    </div>
  )
}

export default Home