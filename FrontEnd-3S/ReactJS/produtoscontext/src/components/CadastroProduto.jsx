import { useContext, useState } from "react";
import { ProdutoContext } from "../context/ProdutoContext";

function CadastroProduto() {
  const [nome, setNome] = useState("");

  const { adicionarProduto } = useContext(ProdutoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome.trim() === "") return;

    adicionarProduto(nome);

    setNome("");
  };

  return (
    <div>
      <h2>Cadastro de Produto</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default CadastroProduto;