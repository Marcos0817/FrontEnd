import './App.css'
import Header from './components/header/header'
import Home from './components/home/home'
import Perfil from './components/perfil/Perfil'
import Produto from './components/produto/Produto'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CadastrarProduto from './components/cadastrarProduto/CadastrarProduto'
import ListarProduto from './components/listarProdutos/ListarProdutos'
import PrivateRoute from './routes/PrivateRoute'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />

          <Route path="/produto"
            element={
              <PrivateRoute>
                <Produto />
              </PrivateRoute>
            } />

          <Route path="/cadproduto"
            element={
              <PrivateRoute>
                <CadastrarProduto />
              </PrivateRoute>
            }
          />

          <Route path="/listarProduto"
            element={
              <PrivateRoute>
                <ListarProduto />
              </PrivateRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
