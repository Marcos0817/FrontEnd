import { createContext, useEffect, useState } from "react";

export const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {

    const [usuario, setUsuario] = useState(null);

    useEffect(() => {

        const usuarioSalvo = localStorage.getItem("usuario");

        if (usuarioSalvo) {
            setUsuario(JSON.parse(usuarioSalvo));
        }

    }, []);

    return (
        <UsuarioContext.Provider
            value={{
                usuario,
                setUsuario
            }}
        >
            {children}
        </UsuarioContext.Provider>
    );
}