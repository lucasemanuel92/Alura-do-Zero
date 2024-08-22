// Verificar se uma pessoa é maior de idade
function maiorIdade(idade) {
    if (idade >= 18) {
        return 'A pessoa é maior de idade'
    } else {
        return 'A pessoa é menor de idade'
    }
}

console.log(maiorIdade(21))

// Forma mais curta
function verificarIdade(idade){
    // 'return' 'condição' ? 'if' : 'else'
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade'
}

console.log(verificarIdade(9))