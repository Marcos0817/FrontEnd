import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UsuarioContext } from '../../context/UsuarioContext'

const  Header = () => {
    const {usuario} = useContext(UsuarioContext)
    return(
        <header>
            <nav>
                <Link to={"/"}>Home</Link> {" "}
                <Link to={"/perfil"}>Perfil</Link>
                <Link to={"/produto"}>Produto</Link>
            </nav>
            <h2>Bem vindo, {usuario}</h2>
        </header>

    )
}

export default Header