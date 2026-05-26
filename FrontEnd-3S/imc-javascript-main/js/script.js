 async function calcular() {

//pegar os valores dos campos
const nome = document.getElementById("nome").value.trim();
const altura = parseFloat(document.getElementById("altura").value);
const peso = parseFloat(document.getElementById("peso").value);

//verificar se tem campo sem preencher
//dar mensagem se tiver faltando sem preencher
//alert("Preencher todos os campos!");
if(nome.length == 0 || isNaN(altura) ||  isNaN(peso) ) 
    {
    alert("Preencher todos os campos!");
    return false;
}

console.log("Liberado para cadastrar");
const IMC = calcularIMC(peso, altura);
    console.log("IMC: " + IMC);

// //calcular o imc
function calcularIMC(peso, altura) 
{
   return peso / (altura * altura);
}

const imc = (calcularIMC(peso, altura).toFixed(2))

 //gerar o texto da situação
 const textoSituacao = gerarSituacao(IMC);
console.log("Situação: " + textoSituacao);

//Gerar um Objeto JS com os dados
const objIMC = {
    "nome": nome,
    "altura": altura,
    "peso": peso,
    "IMC": imc,
    "situacao": textoSituacao
};

//Cadastrar na API
const dadosGravados = await cadastrarNaAPI(objIMC)
console.log(dadosGravados);

if("error" in dadosGravados){
    alert(dadosGravados.error)
}else{
    // Mostrar no html (inserir a linha da tabela
    carregarCadastros();

}


}//fim da função calcular

async function carregarCadastros() {
        alert("Carregando os dados ...");

        const resposta = await fetch("http://localhost:3000/imc");

        const dados = await resposta.json();

        dados.sort((a, b) => {
          return  a.nome.localeCompare(b.nome);
        });

        console.log(dados);

        document.getElementById("cadastro").innerHTML = "";
         dados.forEach(item => {
            mostrarNaTela(item);
        });

}

async function cadastrarNaAPI(objCadastro) {
    // fazer um post da api
    try {
        const retorno = await fetch("http://localhost:3000/imc", {
            method : "POST",
            body : JSON.stringify(objCadastro),
            headers : {"Content-Type" : "application/json; charset=UTF-8"} 
        });

        const dadosGravados = await retorno.json();
        return dadosGravados;

    } catch (error) {
        console.log(error);
        return await {
            error : "problemas para gravar na API"}
    }
}//fim da função

function mostrarNaTela(objCadastro) {
    document.getElementById("cadastro").innerHTML += `
 <tr>
    <td>${objCadastro.nome}</td>
    <td>${objCadastro.altura}</td>
    <td>${objCadastro.peso}</td>
    <td>${objCadastro.IMC}</td>
    <td>${objCadastro.situacao}</td>
</tr>`;
}


//  Menor que 16 – Magreza grave;

// 16 a menor que 17 – Magreza moderada;

// 17 a menor que 18,5 – Magreza leve;

// 18,5 a menor que 25 – Saudável;

// 25 a menor que 30 – Sobrepeso;

// 30 a menor que 35 – Obesidade Grau I;

// 35 a menor que 40 – Obesidade Grau II (considerada severa);

// Maior que 40 – Obesidade Grau III (considerada mórbida).

function gerarSituacao(IMC) {
    if (IMC < 16) {
        return "Magreza grave";
    } else if (IMC < 17) {
        return "Magreza moderada";
    } else if (IMC < 18.5) {
        return "Magreza leve";
    } else if (IMC < 25) {
        return "Saudável";
    } else if (IMC < 30) {
        return "Sobrepeso";
    } else if (IMC < 35) {
        return "Obesidade Grau I";
    } else if (IMC < 40) {
        return "Obesidade Grau II (considerada severa)";
    } else {
        return "Obesidade Grau III (considerada mórbida)";
    }
}

