const form = document.getElementById("formProduto");
const cardsProdutos = document.getElementById("cardsProdutos");

let produtos = [];

form.addEventListener("submit", function(event){
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const categoria = document.getElementById("categoria").value;
  const preco = document.getElementById("preco").value;
  const estoque = document.getElementById("estoque").value;
  const imagem = document.getElementById("imagem").value;

  const produto = {
    id: Date.now(),
    nome,
    categoria,
    preco,
    estoque,
    imagem
  };

  produtos.push(produto);

  renderizarProdutos();

  form.reset();
});

async function cadastrarNaAPI(objCadastro) {
    try {
        const retorno = await fetch("http://localhost:3000/produtos", {
            method: "POST",
            body: JSON.stringify(objCadastro),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const dados = await retorno.json();
        return dados;

    } catch (error) {
        console.log(error);
        return { error: "Erro ao cadastrar na API" };
    }
}

async function carregarCadastros() {
    try {
        const resposta = await fetch("http://localhost:3000/produtos");
        const dados = await resposta.json();

        cadastro.innerHTML = "";

        dados.forEach(item => {
            mostrarNoQuadro(item);
        });

    } catch (error) {
        console.log("Erro ao buscar dados");
    }
}


function renderizarProdutos(){

  cardsProdutos.innerHTML = "";

  produtos.map((produto) => {

    cardsProdutos.innerHTML += `
    
      <div class="card">

        <img className="img-card" src="${produto.imagem}" alt="${produto.nome}">

        <div class="card-content">

          <h3>${produto.nome}</h3>

          <span class="categoria">
            ${produto.categoria}
          </span>

          <p class="preco">
            R$ ${produto.preco}
          </p>

          <p class="estoque">
            Estoque: ${produto.estoque}
          </p>

          <div class="acoes">
            <button class="editar">
              Editar
            </button>

            <button 
              class="excluir"
              onclick="excluirProduto(${produto.id})"
            >
              Excluir
            </button>
          </div>

        </div>

      </div>

    `;  
  });
}

function excluirProduto(id){

  produtos = produtos.filter((produto) => {
    return produto.id !== id;
  });

  renderizarProdutos();
}