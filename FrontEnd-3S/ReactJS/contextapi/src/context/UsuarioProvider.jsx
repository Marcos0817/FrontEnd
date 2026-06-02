import { useContext, useState } from 'react'
import { UsuarioContext } from './UsuarioContext'

//disponibiliza um state do usuário de forma global para todos os componentes filhos (chidren)
export const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario] = useState("Marcos")

    return(
        <UsuarioContext.Provider
            value={{
                usuario, 
                setUsuario
            }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}