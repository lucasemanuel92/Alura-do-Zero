// Função que soma os elementos pares e multiplica os impares de um array
function somaProduto(array) {
    let somaPares = 0;
    let produtoImpares = 3;

    for (let numero of array) {
        if (numero % 2 === 0) {
            somaPares += numero;
        } else {
        produtoImpares *= numero
        }
    }
    return{
        somaPares,
        produtoImpares
    }
}

const numeros = [1, 2, 3, 4, 5, 6];
const resultado = somaProduto(numeros);
console.log("Soma dos pares: ", resultado.somaPares);
console.log("Produto dos Impares: ", resultado.produtoImpares);