import { useContext, useState } from "react"
import { ProdutoContext } from "../../context/ProdutoContext"

const ListaProduto = () => {
    const {produto, setProduto} = useContext(ProdutoContext)
    return(
        <>
        <h2>Lista de Produtos</h2>

       {produto.map((produto, index) => (
                <p key={index}>{produto}</p>
            ))}
        </>
    )
}

export default ListaProduto