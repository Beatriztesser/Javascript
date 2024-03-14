import entrade from 'readline-sync'

// . Implementar um programa que simule uma calculadora. O usuário deverá
// informar dois valores e a operação desejada.
// Com auxílio de um switch deve ser computado e mostrado o resultado da
// operação.

const num= entrade.questionInt('Digite o primeiro numero: ')
const num1= entrade.questionInt('Digite o segundo numero: ')
const num2= entrade.question('Digite a operacao desejada: ')

switch (num2) {
    case '*':
        console.log(num*num1)        
        break;
    case '/':
        console.log(num/num1)
        break;
    case '-':
        console.log(num-num1)
        break;
    case '+':
        console.log(num+num1)
        break; 



        
    default:
        break;
}

