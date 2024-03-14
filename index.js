import entradaDados from 'readline-sync';

//let nome= entradaDados.question('Digite seu nome: ');
//console.log(`Olá, ${nome}.`);

let x= entradaDados.questionInt('X: ');
let y= entradaDados.questionInt('Y: ');
console.log(`Total: ${x+y}`);

//Solicite ao usuário para inserir um número representando um dia da
//semana (1 a 7) e mostre o nome do dia correspondente.
let num= entradaDados.questionInt('Número 1: ')
