// 04. Crie uma função que receba um valor e uma
// porcentagem como parâmetros. A função deve retornar o
// valor acrescido da porcentagem indicada.

var valor=function(valor, porcentagem){
    return valor + (valor*porcentagem/100)
}
 console.log(valor(100,10))