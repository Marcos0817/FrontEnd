// Importa o componente de rodapé da aplicação
import Footer from "../../components/footer/Footer"

// Importa o componente de cabeçalho da aplicação
import Header from "../../components/header/Header"

// Importa o arquivo de estilos CSS específico desta página
import "./CadastroGenero.css"

// Importa o componente reutilizável de formulário de cadastro
import Cadastro from "../../components/cadastro/Cadastro"

// Importa os hooks do React:
// useEffect -> executa algo em momentos do ciclo de vida
// useState -> cria estados (dados dinâmicos)
import { useEffect, useState } from "react"

// Importa a configuração do serviço da API (axios ou similar)
import api from "../../services/services"

// Importa o componente reutilizável de listagem
import Lista from "../../components/lista/Lista"

// Importa um alerta personalizado criado no projeto
import { Alerta } from "../../components/alerta/Alerta"

// Importa a biblioteca SweetAlert2 para alertas visuais
import Swal from "sweetalert2"

// Cria o componente principal da página
const CadastroGenero = () => {

    // =========================
    // STATES E VARIÁVEIS
    // =========================

    // Guarda o valor digitado no input do formulário
    const [valor, setValor] = useState("")

    // Guarda o ID do gênero que será editado
    const [idEditar, setIdEditar] = useState(0)

    // Controla se a tela está em modo edição
    // false = cadastro normal
    // true = edição
    const [editar, setEditar] = useState(false)

    // Guarda todos os gêneros retornados pela API
    const [listaGeneros, setListaGeneros] = useState([])

    // Guarda o ID do gênero editado
    // (obs: atualmente não está sendo utilizado)
    const [idGeneroEditado, setIdGeneroEditado] = useState(null)

    // =========================
    // FUNÇÃO DE CADASTRO
    // =========================

    // Função chamada ao enviar o formulário
    const cadastrarGenero = async (e) => {

        // Impede o recarregamento da página
        e.preventDefault()

        // =========================
        // VALIDAÇÃO
        // =========================

        // trim() remove espaços vazios do começo e do fim
        // verifica se o campo ficou vazio
        if (valor.trim().length == 0) {

            // Exibe alerta de aviso
            Alerta({
                title: "Cadastro de Gênero",
                text: "Gênero deve ser preenchido antes de cadastrar!!",
                icon: "warning",
                confirmButtonText: "OK!"
            })

            // Encerra a função
            return false
        }

        // Cria o objeto que será enviado para a API
        const objCadastro = {
            nome: valor
        }

        try {

            // Faz requisição POST para cadastrar um gênero
            const retornoAPI = await api.post("/Genero", objCadastro)

            // Verifica se a API retornou sucesso
            if (retornoAPI.status == 201) {

                // Exibe mensagem de sucesso
                Alerta({
                    title: "Cadastro de Gênero",
                    text: `Gênero ${objCadastro.nome} cadastrado com sucesso!`,
                    icon: "success",
                    confirmButtonText: "OK"
                })

                // Limpa os campos do formulário
                limparFormulario()

                // Atualiza automaticamente a lista
                getGeneros()

            } else {

                // Caso a API não retorne sucesso
                Alerta({
                    title: "Cadastro de Gênero",
                    text: `Houve algum problema para cadastrar...`,
                    icon: "error",
                    confirmButtonText: "OK",
                })
            }

        } catch (error) {

            // Captura erros da API ou conexão
            Alerta({
                title: "Cadastro de Gênero",
                text: `Erro na chamada da API...`,
                icon: "error"
            })

            // Mostra erro no console
            console.log(error)
        }

        return false
    }

    // =========================
    // LIMPAR FORMULÁRIO
    // =========================

    // Reseta os campos e sai do modo edição
    const limparFormulario = () => {

        // Limpa o input
        setValor("")

        // Desativa modo edição
        setEditar(false)

        // Reseta ID
        setIdEditar(0)
    }

    // =========================
    // EXCLUIR GÊNERO
    // =========================

    // Recebe o item da lista que será excluído
    const excluirGenero = async (item) => {

        // Mostra alerta de confirmação
        const result = await Alerta({
            title: "Você tem certeza?",
            text: "Você não poderá reverter isso!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d6a100ff",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, excluir!",
            cancelButtonText: "Cancelar"
        })

        // Se clicar em cancelar, interrompe
        if (!result.isConfirmed) {
            return
        }

        try {

            // Faz requisição DELETE para API
            await api.delete(`/Genero/${item.idGenero}`)

            // Remove o item da lista sem precisar recarregar a página
            const novaLista = listaGeneros.filter(
                genero => genero.idGenero !== item.idGenero
            )

            // Atualiza o state da lista
            setListaGeneros(novaLista)

            // Exibe mensagem de sucesso
            Alerta({
                title: "Excluir Gênero",
                text: "Gênero excluído com sucesso!",
                icon: "success",
                confirmButtonText: "OK!"
            })

        } catch (error) {

            // Mostra erro no console
            console.log(error)

            // Exibe alerta de erro
            Alerta({
                title: "Excluir Gênero",
                text: "Erro ao excluir o gênero :(",
                icon: "error",
                confirmButtonText: "OK!"
            })
        }
    }

    // =========================
    // PREPARAR EDIÇÃO
    // =========================

    // Coloca os dados do item selecionado no formulário
    const preEditar = (item) => {

        // Guarda o ID do item que será editado
        setIdEditar(item.idGenero)

        // Coloca o nome no input
        setValor(item.nome)

        // Ativa modo edição
        setEditar(true)

        // Mostra item no console
        console.log(item)
    }

    // =========================
    // EDITAR GÊNERO
    // =========================

    const editarGenero = async (e) => {

        // Impede reload da página
        e.preventDefault()

        // Validação do campo
        if (valor.trim().length == 0) {

            Alerta({
                title: "Editar Gênero",
                text: `Gênero deve ser preenchido`,
                icon: "warning",
                confirmButtonText: "OK!"
            })

            return false
        }

        // Objeto enviado para API
        const objEditar = {
            nome: valor
        }

        try {

            // Faz requisição PUT para atualizar gênero
            const retornoAPI = await api.put(
                `/Genero/${idEditar}`,
                objEditar
            )

            // Verifica se editou com sucesso
            if (retornoAPI.status == 200 || retornoAPI.status == 204) {

                // Atualiza o item editado na lista
                const novaLista = listaGeneros.map((genero) => {

                    // Procura o item correto pelo ID
                    if (genero.idGenero == idEditar) {

                        // Retorna objeto atualizado
                        return {
                            ...genero,
                            nome: valor
                        }
                    }

                    // Mantém os demais itens iguais
                    return genero
                })

                // Limpa formulário
                limparFormulario()

                // Atualiza lista vinda da API
                getGeneros()

                // Atualiza state local
                setListaGeneros(novaLista)

                // Exibe sucesso
                Alerta({
                    title: "Editar Gênero",
                    text: `Gênero editado com sucesso!`,
                    icon: "success",
                    confirmButtonText: "OK!"
                })

            } else {

                // Caso dê erro na edição
                Alerta({
                    title: "Editar Gênero",
                    text: `Erro ao editar o Gênero :(`,
                    icon: "success",
                    confirmButtonText: "OK!"
                })
            }

        } catch (error) {

            // Mostra erro no console
            console.log(error)

            // Alerta de erro
            Alerta({
                title: "Editar Gênero",
                text: `Erro na chamada da API`,
                icon: "error",
                confirmButtonText: "OK!"
            })
        }

        return false
    }

    // =========================
    // CICLO DE VIDA
    // =========================

    // Executa apenas uma vez ao carregar a página
    useEffect(() => {

        // Busca os gêneros da API
        getGeneros()

    }, [])

    // =========================
    // BUSCAR GÊNEROS
    // =========================

    const getGeneros = async () => {

        try {

            // Faz GET na API
            const retornoAPI = await api.get("/Genero")

            // Extrai os dados retornados
            const dados = retornoAPI.data

            // Salva os dados no state
            setListaGeneros(dados)

        } catch (error) {

            // Mostra alerta em caso de erro
            Alerta({
                title: "Cadastro de Gênero",
                text: `Erro ao retornar os dados`,
                icon: "error",
                confirmButtonText: "OK!"
            })
        }
    }

    // =========================
    // JSX (TELA)
    // =========================

    return (
        <>
            {/* Cabeçalho da aplicação */}
            <Header />

            <main>

                {/* Componente de formulário */}
                <Cadastro
                    tituloCadastro="Cadastro de Gêneros"
                    visibilidade="none"
                    placeholder="gênero"
                    valor={valor}
                    cancelarEdicao={limparFormulario}
                    setValor={setValor}
                    mostrarImagem={false}
                    funcCadastro={
                        editar
                            ? editarGenero
                            : cadastrarGenero
                    }
                    btnEditar={editar}
                />

                {/* Componente de listagem */}
                <Lista

                    // Título da lista
                    tituloLista="Lista de Gêneros"

                    // Controle visual
                    visibilidade="none"

                    // Dados da lista
                    lista={listaGeneros}

                    // Tipo da lista
                    tipoLista="genero"

                    // Função de excluir
                    funcExcluir={excluirGenero}

                    // Função de editar
                    funcEditar={preEditar}
                />
            </main>

            {/* Rodapé da aplicação */}
            <Footer />
        </>
    )
}

// Exporta o componente para ser utilizado em outras partes
export default CadastroGenero