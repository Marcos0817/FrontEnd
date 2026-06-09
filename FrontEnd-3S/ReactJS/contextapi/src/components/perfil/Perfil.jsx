import { useContext } from 'react'
import { useState } from 'react'
import { UsuarioContext } from '../../context/UsuarioContext'

const Perfil = () => {
    const { usuario, setUsuario } = useContext(UsuarioContext)
    const [novoUsuario, setNovoUsuario] = useState()

    const login = () => {
        //pega o usuario e coloca no storage - pendrive do navegador
        localStorage.setItem("usuario", JSON.stringify(novoUsuario))
        setUsuario(novoUsuario)
        setNovoUsuario("")//limpa os dados do formulário
    }
    return (
        <div>

            <h2>Página de perfil ({usuario})</h2>

            <input type="text"
                placeholder="digite o novo usuário"
                value={novoUsuario}
                onChange={(e) => {
                    setNovoUsuario(e.target.value)
                }}
            />

            <button onClick={() => {
                login()
            }}
            >Entar</button>

            <p>Novo Usuário: <strong>{novoUsuario}</strong></p>

        </div>

    )
}

export default Perfil