//utilizado para filtrar um elemento dentro de array. Retorna apenas o encontrado, veja:

const numeros = [5, 10, 14, 50, 10, 900, 100, 10];

const numeroEncontrado = numeros.filter((n)=>{
    return n == 10;
});

const nomes = [
    "Walyson",
    "Davi",
    "Edu",
    "Laura",
    "Lívia",
    "Amy",
    "Paulo",
    "James",
    "Marcos",
    "Felipe",
    "Gabriel",
    "Gabriele",
    "Stephani",
    "Fontes"
];

pessoasLegais = nomes.filter((nome) => {
    return nome.length <= 3 || nome.length == 6;
});

console.log(pessoasLegais);

//nomes com até 3 letras ou exatamente 6 letras
PessoasLetraN = nomes.filter((nome)=>{
    //começa no caracter zero e trás somente 1 caracter
    const primeiraLetra = nome.substring(0,1);
    return primeiraLetra == "N" || primeiraLetra == "L";
});
console.log(PessoasLetraN);