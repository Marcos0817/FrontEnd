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

// //Retornar todas as camisetas do perfil femenino: "F"
// const femininas = estoque.filter((item) => {
//      return item.perfil == "F";
// });

// console.log(femininas);

// Retornar todas as camisetas que estão em promoção
let qtdPromo = 0
const camisaPromocao = estoque.filter((nome) => {
    if(nome.promocao == true){
        qtdPromo += nome.quantidade
    }
    return nome.promocao == true
});

console.log(camisaPromocao)
