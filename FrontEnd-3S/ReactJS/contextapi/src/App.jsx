import './App.css'
import Header from './components/header/header'
import Home from './components/home/home'
import Perfil from './components/perfil/Perfil'
import Produto from './components/produto/Produto'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/produto" element={<Produto />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
