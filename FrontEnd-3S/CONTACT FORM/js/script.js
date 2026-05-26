/*Esta função recebe od dados do formulário em um objeto
 JavaScript e em seguida chama a api para cadastrar*/

async function cadastrarContato(objetoContato)
{
    console.log(objetoContato);

    //chamar a api com fetch
    const resposta = await fetch("http://localhost:3000/contatos", {
        method: "POST",
        body: JSON.stringify(objetoContato), //converte o objeto JavaScript para JSON
        headers: {//informa para a api que o body está sendo enviado no formato JSON
            "Content-Type": "application/json, charset=utf-8",
        }
    });
    return await resposta;
}


async function buscarEndereco(cep) 
{

    // quando o cep não vier preenchido
    if (cep.trim().length < 8) 
    {    
        alert("O CEP deve ter 8 números!");
        return false;
    }

    //buscar o cep lá no viacep
    try 
    {
        aguardandoCampo();

        let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let dados = await retorno.json();
        
        //preenchendo os campos do formulário
        console.log(dados);//objeto dados
        console.log(dados.logradouro);//nome da rua
        console.log(dados.bairro);//bairro
        console.log(dados.localidade);//cidade
        console.log(dados.uf);//estado

        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.uf;
    } 
    catch (error) 
    {
        console.log(error);
    }
}

//informar ao usuário que o sistema está buscando o endereço
function aguardandoCampo()
{
    document.getElementById("rua").value = "Aguardando...";
    document.getElementById("bairro").value = "Aguardando...";
    document.getElementById("cidade").value = "Aguardando...";
    document.getElementById("estado").value = "Aguardando...";
}

function validarFormulario() 
{
    let quantidadesErros = 0;

    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let pais = document.getElementById("Pais").value;
    let ddd = document.getElementById("ddd").value;
    let telefone = document.getElementById("telefone").value;
    let cep = document.getElementById("cep").value;
    let rua = document.getElementById("rua").value;
    let numero = document.getElementById("numero").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let anotação = document.getElementById("anotação").value;


    if (nome.trim().length == 0) {
        formError("nome");
        quantidadesErros++;
    } else {
        ReiniciaBordas("nome");
    }
/************************************************************/ 
    if (sobrenome.trim().length == 0) {
        formError("sobrenome");
        quantidadesErros++;
    } else {
        ReiniciaBordas("sobrenome");
    }
/************************************************************/ 
    if (email.trim().length == 0) {
        formError("email");
        quantidadesErros++;
    } else {
        ReiniciaBordas("email");
    }
/************************************************************/ 
    if (pais.trim().length == 0) {
        formError("Pais");
        quantidadesErros++;
    } else {
        ReiniciaBordas("Pais");
    }
/************************************************************/ 
    if (ddd.trim().length == 0) {
        formError("ddd");
        quantidadesErros++;
    } else {
        ReiniciaBordas("ddd");
    }
/************************************************************/ 
    if (telefone.trim().length == 0) {
        formError("telefone");
        quantidadesErros++;
    } else {
        ReiniciaBordas("telefone");
    }
/************************************************************/ 
    if (cep.trim().length == 0) {
        formError("cep");
        quantidadesErros++;
    } else {
        ReiniciaBordas("cep");
    }
/************************************************************/ 
    if (rua.trim().length == 0) {
        formError("rua");
        quantidadesErros++;
    } else {
        ReiniciaBordas("rua");
    }
/************************************************************/ 
    if (numero.trim().length == 0) {
        formError("numero");
        quantidadesErros++;
    } else {
        ReiniciaBordas("numero");
    }
/************************************************************/ 
    if (bairro.trim().length == 0) {
        formError("bairro");
        quantidadesErros++;
    } else {
        ReiniciaBordas("bairro");
    }
/************************************************************/ 
    if (cidade.trim().length == 0) {
        formError("cidade");
        quantidadesErros++;
    } else {
        ReiniciaBordas("cidade");
    }
/************************************************************/ 
    if (estado.trim().length == 0) {
        formError("estado");
        quantidadesErros++;
    } else {
        ReiniciaBordas("estado");
    }
/************************************************************/ 
    if (anotação.trim().length == 0) {
        formError("anotação");
        quantidadesErros++;
    } else {
        ReiniciaBordas("anotação");
    }
/************************************************************/ 

  // hora de cadastrar
    if (quantidadesErros > 0) {
        alert("Existem " + quantidadesErros + " campo(s) com erro, por favor verifique!");
    } else {
        alert("Formulário enviado com sucesso!");
        reiniciaTodasAsBordas();
    }

    //Gerar objeto de contato
    let objetoContato = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        telefone: `${Pais}${ddd}${telefone}`,
        cep: cep,
        rua: rua,
        numero: numero,
        cidade: cidade,
        estado: estado,
        complemento: complemento,
        bairro: bairro,
        anotação: anotação
    };

    let cadastrado = cadastrarContato(objetoContato);
    return cadastrado;

    // alert("Cadastrado com sucesso!");
    reiniciaTodasAsBordas();
}

function formError(idCampo){
    document.getElementById(idCampo).style.border = "2px solid red";
}

function ReiniciaBordas(idCampo){
    document.getElementById(idCampo).style.border = "2px solid green";
}

function reiniciaTodasAsBordas(){
    let campos = document.querySelectorAll("input, textarea");

    campos.forEach(function(campo){
        campo.style.border = "";
    });
}
