import { createContext, useState } from "react";

export const ProdutoContext = createContext();

export function ProdutoProvider({ children }) {
  const [produtos, setProdutos] = useState([]);

  const adicionarProduto = (nome) => {
    const novoProduto = {
      id: Date.now(),
      nome,
    };

    setProdutos((produtosAnteriores) => [
      ...produtosAnteriores,
      novoProduto,
    ]);
  };

  return (
    <ProdutoContext.Provider
      value={{
        produtos,
        adicionarProduto,
      }}
    >
      {children}
    </ProdutoContext.Provider>
  );
}