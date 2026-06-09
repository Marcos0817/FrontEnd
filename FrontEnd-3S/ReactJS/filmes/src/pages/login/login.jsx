import Logo from "../../assets/img/logo.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../../context/UsuarioContext";

const Login = () => {

    const { setUsuario } = useContext(UsuarioContext);

    const navigate = useNavigate();

    const realizarLogin = (e) => {

        e.preventDefault();

        const usuario = {
            nome: "Marcos"
        };

        localStorage.setItem(
            "usuario",
            JSON.stringify(usuario)
        );

        setUsuario(usuario);

        navigate("/filmes");
    };

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
                    onSubmit={realizarLogin}
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
                                placeholder="Digite seu e-mail"
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
                                placeholder="Digite sua senha"
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
