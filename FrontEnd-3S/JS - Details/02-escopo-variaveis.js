const nome = `Marcos`;

let sobrenome = "Felix";

{
    const nome = "Marcão"
    let sobrenome = "Vinicius";
    console.log(`Nome Completo: ${nome} ${sobrenome}`);

}

nome = 600.97;
nome = true;

console.log(`Nome Completo: ${nome} ${sobrenome}`);


const nomes = ["Marcos", "Ana Julia"];
for (var i = 0; i < nomes.length; i++)
{
    console.log(`Nome ${i}: $${nome[i]}`)
}

console.log(i);//?