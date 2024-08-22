// Crie uma função que determina se um número é positivo, negativo ou zero
function positivoNegativo(numero) {
    if (numero > 0){
        return 'Numero positivo'
    } else if (numero < 0) {
        return 'Numero negativo'
    } else {
        return 'O Numero é 0'
    }
}


console.log(positivoNegativo(-3));