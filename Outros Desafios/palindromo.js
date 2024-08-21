// Verificar se é um palíndromo (palavras que lidas ao contrário são iguais) 

verificarPalindromo();
// Será usado um hoisting, ou seja, vai buscar a inicialização
function verificarPalindromo() {
    let palavra = "peixe";
    // Tornar uma string em array
    let separandoLetras = palavra.split('');
    let palavraInvertida = separandoLetras.reverse();
    palavraInvertida = palavraInvertida.join('');
        if (palavra == palavraInvertida) {
            console.log(`A palavra ${palavra} é um palíndromo`);
        } else {
            console.log(`A palavra ${palavra} não é um palíndromo`);
        }
}

