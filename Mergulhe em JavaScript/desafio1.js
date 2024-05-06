// Criar uma funcao que exibe olá mundo
function exibirOla(){
    console.log(`ola mundo`);
}

exibirOla();

// Criar uma funcao que recebe um nome e imprime Ola, [nome]!
function imprimirNome(nome) {
    console.log(`Ola, ${nome}`)
}

imprimirNome(`Lucas`); 

// Recebe um numero e retorna o dobro
function dobro(numero) {
    return numero * 2;
} 

let resultado = dobro(5);
console.log(resultado);

// Recebe 3 numeros e calcula a media
function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}

let media = calcularMedia(3, 5, 6);
console.log(media);