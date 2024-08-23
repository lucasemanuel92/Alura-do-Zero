// Função recebe um array e um elemento e verificar se ele está lá
function verificarElemento(arr, elemento) {
    return arr.includes(elemento)
}

const arrayTeste = [1, 2, 4, 5, ,3];
const elementoTeste = 2;

const elementoPresente = verificarElemento(arrayTeste, elementoTeste);

if (elementoPresente) {
    console.log(`O elemento ${elementoTeste} está presente`);
} else {
    console.log(`O elemento ${elementoTeste} não está presente`);
}