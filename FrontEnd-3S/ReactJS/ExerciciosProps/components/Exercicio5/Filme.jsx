// 05) Crie um componente chamado Filme que receba:
// titulo
// ano
// genero
// nota
// Mostre todas as informações na tela.

// Crie pelo menos 3 filmes diferentes.

const Filme = ({ titulo, ano, genero, nota }) => 
{
    return (
        <p>
            <strong>{titulo}</strong> ({ano}) - {genero} - Nota: {nota}
        </p>
    );
}


export default Filme;