function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Numeros ordenados: ${numerosOrdenados.join(',')}`)
}

ordenarNumeros(3, 1, 5)