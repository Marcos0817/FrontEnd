import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UsuarioContext } from '../context/UsuarioContext'

//Componentes de rotas privadas
const PrivateRoute = ({ children }) => {
    //recupera o state global do usuário (vem do UsuarioProvider)
    const { usuario } = useContext(UsuarioContext)

    // logado? renderiza o componente privado
    // não logado? redireciona para a página inicial
    return usuario ? children : <Navigate to="/" />
        
}

export default PrivateRoute