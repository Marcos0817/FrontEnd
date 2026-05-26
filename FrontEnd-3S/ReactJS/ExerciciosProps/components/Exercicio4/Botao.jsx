// 04) Crie um componente chamado Botao que receba:
// texto
// cor
// O botão deve:
// Mostrar o texto recebido
// Alterar a cor de fundo conforme a prop cor

import './Botao.css';


const Botao = ({ texto, cor }) => 
{
    return (
        <button className={cor} onClick={setBotaoCor(1)}>
            {texto}
        </button>
    );
}


export default Botao