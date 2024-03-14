import entrada from 'readline-sync';
//Solicite ao usuário para inserir um número representando um dia da
//semana (1 a 7) e mostre o nome do dia correspondente.

let num= entrada.questionInt('Numero : ');
switch (num) {
    case 1:
        console.log('segunda-feira')
        break;
    case 2:
        console.log('terça-feira')
        break;
    case 3:
        console.log('quarta-feira')
        break;
    case 4:
        console.log('quinta-feira')
        break;
    case 5:
        console.log('sexta-feira')
        break;
    case 6:
        console.log('sabádo')
        break;
    case 7:
        console.log('domingo')
        break;
    default:
        break;
}