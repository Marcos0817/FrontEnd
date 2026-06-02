import CadastroProduto from "./components/CadastroProduto.jsx";
import ListaProduto from "./components/ListaProduto.jsx";
import { ProdutoProvider } from "./context/ProdutoContext.jsx";

function App() {
  return (
    <ProdutoProvider>
      <div>
        <h1>Sistema de Produtos</h1>

        <CadastroProduto />

        <hr />

        <ListaProduto />
      </div>
    </ProdutoProvider>
  );
}

export default App;