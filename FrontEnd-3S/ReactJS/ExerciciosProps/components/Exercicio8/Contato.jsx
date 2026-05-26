
import './Contato.css';


const Contato = ({ nome, telefone, email}) => 
{
    return (
        <div>
            <p>{nome} - {telefone} - {email}</p>
        </div>
    );
}


export default Contato;