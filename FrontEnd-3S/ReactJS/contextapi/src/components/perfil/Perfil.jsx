import { useContext } from 'react'
import { UsuarioContext } from '../../context/UsuarioContext'

const Perfil = () => {
    const { usuario, setUsuario } = useContext(UsuarioContext)
    const [novoUsuario, setNovoUsuario] = useState()
    return (
        <div>

            <h2>Página de perfil ({usuario})</h2>

            <input type="text"
                placeholder="digite o novo usuário"
                onChange={(e) => {
                    setNovoUsuario(e.target.value)
                }}
            />

            <button onClick={() => {
                setUsuario(novoUsuario)
            }}
            >Trocar Usuário</button>

            <p>Novo Usuário: <strong>{novoUsuario}</strong></p>

        </div>

    )
}

export default Perfil