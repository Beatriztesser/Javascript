// Peça ao usuário para inserir um número de mês (1 a 12) e exiba o nome
// do mês

import entrada from 'readline-sync'
let num= entrada.questionInt('Digite um numero: ')
switch (num) {
    case 1:
        console.log('janeiro')
        break;
    case 2:
        console.log('fevereiro')
        break;
    case 3:
        console.log('marco')
        break;
    case 4:
        console.log('Abril')
        break;
    case 5:
        console.log('Maio')
        break;
    case 6:
        console.log('Junho')
        break;
    case 7:
        console.log('Julho')
        break
    case 8:
        console.log('agosto')
        break
    case 5:
        console.log('Maio')
        break;
    case 6:
        console.log('Junho')
        break;
    case 7:
        console.log('Julho')
    case 8:
        console.log('agosto')
        break;
    case 9:
        console.log('Setembro')
        break;
    case 10:
        console.log('Outubro')
        break;
    case 11:
        console.log('NOvembro')
    case 12:
        console.log('Dezembro')
        break;
    default:
        break;
}