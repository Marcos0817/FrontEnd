import { useState } from "react";
import "./cadfruta.css";

export default function CadFruta() {

  // states
    const [fruta, setFruta] = useState("");
    const [qtdFruta, setQtdFruta] = useState("");
    const [arrFrutas, setArrFrutas] = useState([
    { id: 1, nome: "abacaxi", quantidade: 10 },
    { id: 2, nome: "Uva", quantidade: 20 }
  ]);

  function Cadastrar(e){
    e.preventDefault();// evita o submit do formulário
    //mover a função de cadastrar aqui para dentro!!!
                setArrFrutas([
              ...arrFrutas,
              {
                id: Date.now(),
                nome: fruta,
                quantidade: qtdFruta
              }
            ]);
            alert("Fruta Cadastrada com sucesso :)")
            limparFormulario() //Após cadastrar, limpar os campos do formulário
    return false;
  }
  //Limpar os states
  function limparFormulario() {
    setFruta("")
    setQtdFruta(0)
  }

  return (
    <section className="sessao-cadastro">
      <h1>Cadastro</h1>
      <form action="" method="post" onSubmit={Cadastrar}>
      <fieldset className="cadastro">
        
        <label htmlFor="fruta" className="cadastro__produto">
          Digite o nome da fruta
        </label>

        <input
          type="text"
          id="fruta"
          className="cadastro__entrada"
          placeholder="Digite o nome da fruta"
          onChange={(e) => {
            setFruta(e.target.value);
          }}
        />

        <label htmlFor="quantidade" className="cadastro_qtd">
          Digite a quantidade de fruta
        </label>

        <input
          type="number"
          id="qtdFruta"
          className="qtd__fruta"
          placeholder="coloque a quantidade de frutas"
          value={qtdFruta}
          onChange={(e) => {
            setQtdFruta(e.target.value);
          }}
        />

      <button type="submit" className="cadastro__btn-cadastrar" >Cadastrar</button>
      <br />
      <label htmlFor="">{fruta}</label>
      </fieldset>
      </form>
      <ul className="listagem">
        {arrFrutas.map((f) => {
          return (
            <li key={f.id}>
              Fruta: {f.nome} | Quantidade: {f.quantidade}
            </li>
          );
        })}
      </ul>
    </section>
  );
}