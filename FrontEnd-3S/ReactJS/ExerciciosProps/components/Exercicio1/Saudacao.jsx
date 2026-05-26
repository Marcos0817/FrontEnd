// 01) Crie um componente chamado Saudacao que receba uma prop chamada nome.

// O componente deve exibir a mensagem:
// Olá, [nome]! Seja bem-vindo(a)!
// Depois, utilize o componente 3 vezes passando nomes diferentes.

import './Saudacao.css';


const Saudacao = ({ nome }) => 
{
    return (
        <h3>Olá, {nome}! Seja bem-vindo(a)!</h3>
    );
}


export default Saudacao;