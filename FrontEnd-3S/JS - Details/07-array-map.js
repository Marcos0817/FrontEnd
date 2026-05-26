const hobbies = [
    "Correr",
    "Nadar",
    "Jogar Bola",
    "Viajar",
    "Lutar",
    "Conversar Muito",
    "Ler Livro",
    "Malhar na Academia",
    "Maratonar Séries",
    "Dormir",
    "Jogar Basquete"
];

//Utilizado para iterar arrays e retornar um novo array, compondo um 
// novo resultado para cada índice do array antigo, veja:

const novoHobbies = hobbies.map((hob) => {
    return `<p>${hob}</p>`;
});

console.log(novoHobbies);