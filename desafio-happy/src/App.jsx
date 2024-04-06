
import './App.css'
import Contacto from './components/Contacto'
import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'
import NotFound from './components/NotFound'




function App() {
  
  return (
    <>
    
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/contacto' element={<Contacto/>} />
     <Route path='*' element={<NotFound/>} />
   </ Routes>
    </>
  )
}

export default App
