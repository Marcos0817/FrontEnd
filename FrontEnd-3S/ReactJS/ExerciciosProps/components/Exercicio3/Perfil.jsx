// 03) Crie um componente chamado Perfil que receba:
// nome
// idade
// profissao
// O componente deve exibir os dados em formato de cartão.

import './Perfil.css';


const Perfil = ({ nome, idade, profissao }) => 
{
    return (
        <div className="perfil">
            <div>
                <h3>{nome} </h3>
                <h3> Idade: {idade}</h3>
            </div>
             
            <h3>{profissao}.</h3>
        </div>
    );
}


export default Perfil;