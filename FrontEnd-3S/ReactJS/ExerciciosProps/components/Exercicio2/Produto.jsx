// 02) Crie um componente chamado Produto que receba as seguintes props:
// nome
// preco
// descricao
// O componente deve exibir:

//    Nome do Produto
//    Preço: R$
//    Descrição do produto

// Crie pelo menos 3 produtos diferentes utilizando o componente.

import './Produto.css';


const Produto = ({ nome, preco, descricao }) => 
{
    return (
        <div className="produto">
            <h3>{nome}</h3>
            <p>Preço: R$ {preco.toFixed(2)}</p>
            <p>Descrição: {descricao}</p>
        </div>
    );
}


export default Produto;