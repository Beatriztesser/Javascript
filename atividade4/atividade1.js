//WHILE


// 01. Escreva um programa que peça ao usuário para digitar um número e, em seguida,
// imprima a tabuada desse número usando um loop while.

import entrade from 'readline-sync';

let num= entrade.questionInt('Digite um numero: ')

let cont = 0;
console.log("Tabuada de multiplicação - Nº " + num);

while (cont <= 10) {
    let resultado = num * cont;
    console.log(`${num} x ${cont} = ${resultado}`);
    cont++;
}