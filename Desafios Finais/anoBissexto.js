// Verificar se o ano é bissexto
function anoBissexto(ano) {
    // "%" resto da divisão, "&&" E, "||" OU
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return 'Ano Bissexto'
    } else {
        return 'Não é bissexto'
    }
}

console.log(anoBissexto(2025))