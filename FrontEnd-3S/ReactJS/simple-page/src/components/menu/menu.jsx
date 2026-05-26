import CardPerfil from "../cardperfil/cardperfil";
import"./menu.css";

function Menu() {
    return (
           <nav className="menu">
        <a href="#" className="menu__item">Home</a>
        <a href="#" className="menu__item">Quem Somos</a>
        <a href="#" className="menu__item">Contato</a>
        <a href="#" className="menu__item menu__item--success">Entrar</a>
        <a href="#" className="menu__item menu__item--button-default">Cadastrar</a>


        {/* colocar card de perfil aqui */}
        <CardPerfil />
    </nav>
    );
    
}

export default Menu;