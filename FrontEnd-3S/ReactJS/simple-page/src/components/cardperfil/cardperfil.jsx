import "./cardperfil.css";
import people from "../../assets/react.svg";
function CardPerfil() {
    return (
        <div className="card-perfil">

            <img 
            className="card-perfil__image" 
            src={people} 
            alt="foto de perfil do usuário"
            />
        </div>
    );
}

export default CardPerfil;

//Reactjs
//Componentes
//Podem receber dados como parâmetros (props)
//Separar os componentes e montar nossa interface
//com os componentes reutilizáveis