// instalar o pacote react-router-dom

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom";
import Login from "../pages/login/login"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/filmes" element={<CadastroFilme />} />
                <Route path="/generos" element={<CadastroGenero />} />
            </Routes>
        </BrowserRouter>
    )
}
