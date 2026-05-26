import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import "./CadastroGenero.css"
import Cadastro from "../../components/cadastro/Cadastro"
import { useEffect, useState } from "react"
import api from "../../services/services"
import Lista from "../../components/lista/Lista"

const CadastroGenero = () => {
    //states e variáveris
    const [valor, setValor] = useState("")
    const [listaGeneros, setListaGeneros] = useState([])
    //ciclo de vida e funções
    const cadastrarGenero = async (e) => {
        e.preventDefault()
        //validação dos dados preenchido
        if (valor.trim().length == 0) {
            alert("Gênero deve ser preenchido antes de cadastrar!!")
            return false
        }

        const objCadastro = {
            nome: valor
        }

        try {
            const retornoAPI = await api.post("/Genero", objCadastro)

            if (retornoAPI.status == 201) {
                alert("Gênero cadastrado com sucesso!")
                limparFormulario()
            } else {
                alert("Houve algum probelema ao cadastrar!!")
            }
        } catch (error) {
            alert("Erro na chamada da API")
            console.log(error)
        }

        return false
    }

    const limparFormulario = () => {
        setValor("")
    }


    const excluirGenero = async (item) => {

        if (!confirm("Você realmente quer apagar o gênero?"))
            return false

        try {

            await api.delete(`/Genero/${item.idGenero}`)

            // remove da lista na tela
            const novaLista = listaGeneros.filter(
                genero => genero.idGenero !== item.idGenero
            )

            setListaGeneros(novaLista)

            alert("Gênero excluído com sucesso!")

        } catch (error) {

            console.log(error)

            alert("Erro ao excluir gênero")
        }
    }

    const editarGenero = () => {
        alert("funcao editar em desenvolvimento")
    }

    useEffect(() => {
        //chamar os dados da api{
        getGeneros()
    }, [])

    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/Genero")//chama a api
            const dados = retornoAPI.data//extari os dados retornados
            setListaGeneros(dados)// guarda os dados no state (já exibe na lista)
        } catch (error) {
            alert("Erro ao retornar os dados")
        }

    }

    //o jsx
    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Gêneros"
                    visibilidade="none"
                    placeholder="gênero"

                    //state
                    valor={valor}

                    //função que muda o state
                    setValor={setValor}
                    funcCadastro={cadastrarGenero}
                />

                <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"

                    //Chama o método para validar:
                    lista={listaGeneros}
                    //Identifica o tipo de lista:
                    tipoLista="genero"
                    funcExcluir={excluirGenero}
                    funcEditar={editarGenero}
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroGenero