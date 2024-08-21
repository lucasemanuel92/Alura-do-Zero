// Verificar se um número é par ou impar
function verificador(numero) {
    if (numero % 2 === 0) { 
        return "Par";
    } else {
        return "Impar"
    }
}

let numero = 8;
let resultado = verificador(numero);
console.log(resultado);