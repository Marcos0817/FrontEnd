const estoque = [
    {
        descrição : "Camisa Polo",
        cor: "Verde",
        preco: 49.99,
        perfil: "M",
        quantidade: 10,
        promocao: false
    },
    
    {
        descrição : "Camisa Polo",
        cor: "Amarela",
        preco: 29.99,
        perfil: "F",
        quantidade: 15,
        promocao: true
    },
    
    {
        descrição : "Camisa Polo",
        cor: "Azul",
        preco: 29.99,
        perfil: "M",
        quantidade: 100,
        promocao: true
    },

    {
        descrição : "Camisa Polo",
        cor: "Roxa",
        preco: 49.99,
        perfil: "F",
        quantidade: 5,
        promocao: false
    },
];

//Reduz o array a um único elemento. No caso um somatório, por exemplo:
let valorTotal = 0;
let totalEstoque = estoque.reduce((total, produto) => {
    valorTotal += produto.preco * produto.quantidade
    return total + produto.quantidade;
}, 0);



console.log(`Você tem um total de ${totalEstoque} produtos no estoque`);
console.log(`O valor total do seu estoque é R$ ${valorTotal.toFixed(2)}`);