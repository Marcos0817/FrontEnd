import { useState } from "react"
import { ProdutoContext } from "./ProdutoContext"


export const ProdutoProvider = ({children}) => {
    const [produto, setProduto] = useState([])

    return(
        <ProdutoContext.Provider
            value={{
                produto, 
                setProduto
            }}
        >
            {children}
        </ProdutoContext.Provider>
    )
}