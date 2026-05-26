const numeros = [
    50,
    200,
    250,
    800,
    992.87,
    300,
    500,
    9876,
    99,
    134
];

//Rodar o map gerando um novo array com o dobro dos números do original
//após, exiba os valores do array dobro no console utilizando o foreach

console.log(`Array original: ${numeros}`);
//Usando o map
const novosNumeros = numeros.map((nn)=>{
    return nn * 2;
});
console.log(novosNumeros);

console.log(`Array modificado: `)
console.log();

//usando o foreach
let textoResultado = "";
novosNumeros.forEach((numbs)=>{
    textoResultado+= `${numbs} | `;//acumula texto em cada string ( sem pular linha)
});

textoResultado = textoResultado.substring(0, textoResultado.length - 3);

console.log(textoResultado);