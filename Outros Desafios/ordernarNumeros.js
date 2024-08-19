// Ordernar 3 numeros aleatórios pré definidos

// função recebe 3 parâmetros
function ordenarNumeros(a, b, c) {
    // Recebe um array e usa o ".sort()" para order e uma arrow function para compara os valores
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Numeros ordenados: ${numerosOrdenados.join(',')}`)
}
// Define os valores nos parâmetros
ordenarNumeros(3, 1, 5)