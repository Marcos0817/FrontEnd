import './App.css'
import imagemAluno from'../src/assets/hero.png';
import Saudacao from "../components/Exercicio1/Saudacao";
import Produto from "../components/Exercicio2/Produto";
import Perfil from "../components/Exercicio3/Perfil";
import Botao from "../components/Exercicio4/Botao";
import Filme from "../components/Exercicio5/Filme";
import Aluno from "../components/Exercicio6/Aluno";
import MeuCard from "../components/Exercicio7/Card";
import Contato from "../components/Exercicio8/Contato";
import Jogo from "../components/Exercicio9/Jogo";
import ItemLoja from "../components/Exercicio10/ItemLoja";



const Pessoas = [
{
  id: 1,
  nome: "Lucas",
  idade: 25,
  profissao: "Desenvolvedor"
},
{
  id: 2,
  nome: "Matheus",
  idade: 30,
  profissao: "Designer"
},
{
  id: 3,
  nome: "Pedro",
  idade: 28,
  profissao: "Analista de Dados"
}
]

const App = () => {

  return (
    
    <>
      {/* <Saudacao nome="Marcos" />
      <Saudacao nome="Hugo" />
      <Saudacao nome="João" /> */}
      
      {/* <Produto nome="Notebook" preco={3500.00} descricao="Computador portátil com 16GB de RAM e 512GB de armazenamento." />
      <Produto nome="Geladeira" preco={4999.00} descricao="Refrigerador com 300 litros de capacidade." />
      <Produto nome="Maquina de lavar" preco={1500.00} descricao="Máquina de lavar roupa com 10kg de capacidade." /> */}

      {/* <Perfil nome="Marcos" idade={25} profissao="Desenvolvedor" />
      <Perfil nome="hugo" idade={30} profissao="Designer" />
      <Perfil nome="João" idade={28} profissao="Analista de Dados" /> */}

      {/* <Botao texto="Botão Vermelho" cor="vermelho" /> */}

      {/* <Filme titulo="O Poderoso Chefão" ano={1972} genero="Crime/Drama" nota={9.2} />
      <Filme titulo="A Origem" ano={2010} genero="Ficção Científica/Ação" nota={8.8} />
      <Filme titulo="Pulp Fiction" ano={1994} genero="Crime/Drama" nota={8.9} /> */}

      {/* <Aluno nome="Marcos" curso="Engenharia de Software" imagem={imagemAluno} />
      <Aluno nome="hugo" curso="Engenharia de Software" imagem={imagemAluno} />
      <Aluno nome="João" curso="Engenharia de Software" imagem={imagemAluno} /> */}
      
      {/* <MeuCard> 
      <Saudacao nome="Marcos" />
      </MeuCard>
      <MeuCard> 
      <Saudacao nome="Hugo" />
      </MeuCard>
      <MeuCard> 
      <Saudacao nome="João" />   
      </MeuCard>    */}

      {/* <Contato nome="Marcos" telefone="(11) 99999-9999" email="lucas@example.com" />
      <Contato nome="Hugo" telefone="(11) 99999-9999" email="matheus@example.com" />
      <Contato nome="João" telefone="(11) 99999-9999" email="pedro@example.com" /> */}
  
      {/* <Jogo nome="The Legend of Zelda: Breath of the Wild" plataforma="Nintendo Switch" preco={299.99} imagem={imagemAluno} />
      <Jogo nome="Super Mario Odyssey" plataforma="Nintendo Switch" preco={199.99} imagem={imagemAluno} />
      <Jogo nome="Sonic Mania" plataforma="PS4" preco={59.99} imagem={imagemAluno} /> */}

        {/* <ItemLoja nome="Notebook Gamer" preco={4500.00} categoria="Eletrônicos" estoque={10}/>
        <ItemLoja nome="Smartphone" preco={2500.00} categoria="Eletrônicos" estoque={0}/>
        <ItemLoja nome="Fone de Ouvido" preco={150.00} categoria="Acessórios" estoque={5}/> */}
      </>

  
//   Pessoas.map(pessoa => (
//     <Perfil key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao} /> 
//   )
// )
  )

}

export default App