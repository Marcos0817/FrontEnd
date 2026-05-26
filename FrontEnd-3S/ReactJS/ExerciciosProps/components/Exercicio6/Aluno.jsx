// 06) Crie um componente chamado Aluno que receba:
// nome
// curso
// imagem
// Exiba:
// A imagem do aluno
// O nome
// O curso

import './Aluno.css';


const Aluno = ({ nome, curso, imagem}) => 
{
    return (
        <div>
            <p>{nome} - {curso}</p>
            <img src={imagem} alt={nome} />
        </div>
    );
}


export default Aluno;