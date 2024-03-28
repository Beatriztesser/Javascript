//FOR IN E FOR OF 



//01-Escreva um programa que itere sobre as propriedades de um objeto e imprima suas chaves e valores.
console.log("\t--- Exercício 01 ---")
// Definir um objeto com algumas propriedades
const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

// Iterar sobre as propriedades do objeto pessoa usando for...in
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}
