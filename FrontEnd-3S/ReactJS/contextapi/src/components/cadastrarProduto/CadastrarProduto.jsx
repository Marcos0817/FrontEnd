import { useContext, useState } from "react";
import { ProdutoContext } from "../../context/ProdutoContext";

const CadastroProduto = () => {
    const { produto, setProduto } = useContext(ProdutoContext);
    const [novoProduto, setNovoProduto] = useState("");

    const limparInput = () => {
        setNovoProduto("");
    };

    const cadastrar = () => {
        if (novoProduto.trim() === "") {
            alert("Digite um produto");
            return;
        }

        setProduto([...produto, novoProduto]);
        alert(`Produto (${novoProduto}) cadastrado com sucesso!`);
        limparInput();
    };

    return (
        <div>
            <h2>Página de Cadastro de Produto</h2>

            <input
                type="text"
                placeholder="Digite o Nome do Produto"
                value={novoProduto}
                onChange={(e) => setNovoProduto(e.target.value)}
            />

            <button onClick={cadastrar}>
                Adicionar Produto
            </button>
        </div>
    );
};

export default CadastroProduto;