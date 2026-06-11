import Logo from "../../assets/img/logo.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao.jsx";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../../context/UsuarioContext";
import { Alerta } from "../../components/alerta/Alerta";
import api from "../../services/services";
import { jwtDecode } from "jwt-decode";

const Login = () => {

    const { setUsuario } = useContext(UsuarioContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const login = async (e) => {
        e.preventDefault();

        if (email.trim() === "" || senha.trim() === "") {
            Alerta({
                title: "Login",
                text: "Preencher todos os campos!",
                icon: "warning",
                confirmButtonText: "OK",
            });
            return;
        }

        const usuario = {
            email,
            senha,
        };

        try {
            const retornoAPI = await api.post("/Login", usuario);

            const token = retornoAPI.data.token;
            const usuarioDecoded = jwtDecode(token);

            setUsuario(usuarioDecoded);

            localStorage.setItem(
                "token",
                JSON.stringify(token)
            );

            setEmail("");
            setSenha("");

            navigate("/filmes");

        } catch (error) {
            Alerta({
                title: "Login",
                text: "Usuário não encontrado!",
                icon: "warning",
                confirmButtonText: "OK",
            });
        }
    };

    const verificarLogin = () => {
        const logado = JSON.parse(localStorage.getItem("usuario"))

        if (logado != undefined || logado != null) {
            setUsuario(logado);
            navigate("/generos");
        }
    }

    useEffect(() => {
        verificarLogin();
    }, []);

    return (
        <main className="main_login">

            <div className="banner"></div>

            <section className="section_login">

                <img
                    src={Logo}
                    alt="Logo do Filmoteca"
                />

                <form
                    className="form_login"
                    onSubmit={login}
                >

                    <h1>Login</h1>

                    <div className="campos_login">

                        <div className="campo_input">

                            <label htmlFor="email">
                                Email:
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Digite seu e-mail"
                                required
                            />

                        </div>

                        <div className="campo_input">

                            <label htmlFor="senha">
                                Senha:
                            </label>

                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                placeholder="Digite sua senha"
                                required
                            />

                        </div>

                    </div>

                    <Botao
                        nomeDoBotao="Entrar"
                    />

                </form>

            </section>

        </main>
    );
};

export default Login;