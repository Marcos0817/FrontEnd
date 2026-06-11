import "./Header.css";
import Logo from "../../assets/img/logo.svg"
import { Link } from "react-router-dom";
import { UsuarioContext } from "../../context/UsuarioContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom";



const Header = () => {
    const { setUsuario } = useContext(UsuarioContext);
    const navigate = useNavigate();

    const realizarLogout = () => {
        localStorage.removeItem("usuario");

        setUsuario(null);

        navigate("/");
    };

    return (
        <header>
            <div className="layout_grid cabecalho">
                <Link to="/">
                    <img src={Logo} alt="Logo do Filmoteca" />
                </Link>

                <nav className="nav_header">
                    <Link className="link_header" to="/filmes">
                        Filme
                    </Link>

                    <Link className="link_header" to="/generos">
                        Gênero
                    </Link>

                    <button
                        className="btn_logout"
                        onClick={realizarLogout}
                    >
                        Sair
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;