// Criar uma calculadora com funções para cada operação
function soma(a, b) {
    return (a + b);
}

function sub(a, b) {
    return (a - b);
}

function multi(a, b) {
    if (b !== 0){
        return (a * b);
    } else {
        return 'Erro! Não é possível dividir por 0'
    }
}

function div(a, b) {
    return ( a / b)
}

function calculadora(operacao, a, b) {
    switch(operacao) {
        case 'soma':
          return soma(a, b);
        case 'subtracao':
            return sub(a, b);
        case 'multiplicacao':
            return multi(a, b);
        case 'divisao':
            return div(a, b);
    }
}

let resultado = calculadora('soma', 3, 2)
console.log(resultado)