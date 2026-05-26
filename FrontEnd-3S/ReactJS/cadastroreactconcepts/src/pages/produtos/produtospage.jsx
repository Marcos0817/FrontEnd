import axios from "axios";
import "./produtospage.css";
import { useEffect, useState } from "react";
import api from "../../Services/services";
export const ProdutosPages = () => {

  // lista
  const [listaProdutos, setListaProdutos] = useState([]);

  // states
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const [imagem, setImagem] = useState("");
  const [editar, setEditar] = useState(false)
  const [idProduto, setIdProduto] = useState(null);
  //função get dados
  async function getDados() {

    try {

      //GetDados utilizando axios
      const retornoAPI = await api.get("/produtos")
      const dados = await retornoAPI.data;

      // const retornoAPI = await fetch("http://localhost:3000/produtos");
      // const dados = await retornoAPI.json();

      setListaProdutos(dados);

    } catch (error) {

      console.log(error);

    }


  }

  // função deletar com axios
  async function Deletar(id) {

    try {

      const response = await api.delete(`/produtos/${id}`);

      if (response.status === 200) {

        alert("Produto DELETADO com sucesso!!");

        // atualiza a lista
        getDados();

      }

    } catch (error) {

      console.log(error);

      alert("Erro ao deletar produto");

    }

  }

  // carregar produtos
  useEffect(() => {


    getDados();

  }, []);

  // cadastrar produto com axios
  const cadastrar = async (e) => {

    e.preventDefault();


    // validação
    if (
      titulo.trim().length === 0 ||
      categoria.trim().length === 0 ||
      preco <= 0 ||
      estoque <= 0
    ) {

      alert("Preencha todos os campos corretamente");

      return;
    }

    // objeto
    const novoProduto = {
      titulo,
      categoria,
      preco,
      estoque,
      imagem
    };

    try {

      //parte do axios
      const resposta = await api.post("/produtos", novoProduto)

      const produtoCadastrado = await resposta.data

      // adiciona na lista
      setListaProdutos([...listaProdutos, produtoCadastrado]);

      // limpa campos


      alert("Produto CADASTRADO!!");

    } catch (error) {

      console.log(error);

    }
    limparFormulario()
  };

  //Limpar o formulário
  function limparFormulario() {
    setIdProduto(null)
    setTitulo("");
    setCategoria("");
    setPreco("");
    setEstoque("");
    setImagem("");
  }


  //FUnção Editar
  const Editar = async (e) => {

    e.preventDefault();

    // validação
    if (
      titulo.trim().length === 0 ||
      categoria.trim().length === 0 ||
      preco <= 0 ||
      estoque <= 0
    ) {

      alert("Preencha todos os campos corretamente");

      return;

    }

    // objeto atualizado
    const novoProdutoAT = {
      titulo,
      categoria,
      preco,
      estoque,
      imagem
    };

    try {

      const resposta = await api.put(`/produtos/${idProduto}`, novoProdutoAT);

      // AXIOS USA STATUS
      if (resposta.status === 200) {

        alert("Produto EDITADO!!");

        // atualizar lista
        getDados();

        // limpar formulário
        limparFormulario();

        // sair modo edição
        setEditar(false);

      }

    } catch (error) {

      console.log(error);

      alert("Erro ao editar produto");

    }

  };


  return (
    <>
      <header>
        <h1 className="titulo-header">
          Meu Estoque
        </h1>
      </header>

      <main className="container">

        {/* FORMULÁRIO */}
        <section className="form-section">

          <h2>Cadastrar Produto</h2>

          <form id="formProduto" onSubmit={editar ? Editar : cadastrar}>

            <input
              className="class-input"
              type="text"
              value={titulo}
              onChange={(e) => {
                setTitulo(e.target.value);
              }}
              placeholder="Nome do produto"
              required
            />

            <input
              className="class-input"
              type="text"
              value={categoria}
              onChange={(e) => {
                setCategoria(e.target.value);
              }}
              placeholder="Categoria"
              required
            />

            <input
              className="class-input"
              type="number"
              value={preco}
              onChange={(e) => {
                setPreco(Number(e.target.value));
              }}
              placeholder="Preço"
              min={0}
              required
            />

            <input
              className="class-input"
              type="number"
              value={estoque}
              onChange={(e) => {
                setEstoque(Number(e.target.value));
              }}
              placeholder="Estoque"
              min={0}
              required
            />

            <input
              className="class-input"
              type="text"
              value={imagem}
              onChange={(e) => {
                setImagem(e.target.value);
              }}
              placeholder="Nome da imagem"
              required
            />

            <div className="buttons">
              <button
                type="submit"
                className="button"
              >
                Salvar
              </button>

              {editar && (
                <button
                  type="submit"
                  className="button-cancel"
                  onClick={() => {
                    setEditar(false)
                    limparFormulario()
                  }}
                >
                  Cancelar
                </button>
              )}


            </div>

          </form>

        </section>

        {/* LISTA */}
        <section className="lista-section">

          <h2 className="h2-card">
            Lista de Produtos
          </h2>

          {listaProdutos.map((p) => {

            return (

              <div
                key={`${p.id}-${p.titulo}`}
                className="cards"
                id="cardsProdutos"
              >

                <img
                  src={`/images/${p.imagem}`}
                  alt={p.titulo}
                />

                <h3>
                  {p.titulo}
                </h3>

                <span className="categoria">
                  {p.categoria}
                </span>

                <p className="preco">
                  R$ {p.preco}
                </p>

                <p className="estoque">
                  Estoque: {p.estoque}
                </p>

                <div className="buttons-card">

                  {/*EDITAR*/}
                  <a
                    className="edit"
                    href=""
                    onClick={(e) => {

                      e.preventDefault();

                      setEditar(true);

                      setIdProduto(p.id);

                      setTitulo(p.titulo);
                      setCategoria(p.categoria);
                      setPreco(p.preco);
                      setEstoque(p.estoque);
                      setImagem(p.imagem);

                    }}
                  >
                    Editar
                  </a>

                  {/*APAGAR*/}
                  <a className="delete" href="" onClick={(e) => {
                    e.preventDefault()
                    Deletar(p.id)
                  }}>Deletar</a>

                </div>


              </div>

            );

          })}

        </section>

      </main>
    </>
  );
}