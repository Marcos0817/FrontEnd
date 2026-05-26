import './App.css';
import Paragrafo from './components/paragrafo/paragrafo';
import Title from './components/title/title';
function App() {
  return(
    <>
      <Title nome="Marcos" sobrenome="Vinicius" texto="Bem vindo"/>
      <Title texto="Eu sou outro título"/>
      <Paragrafo textoParagrafo="Este é o meu parágrafo"/>
    </>
  );
}

export default App;
