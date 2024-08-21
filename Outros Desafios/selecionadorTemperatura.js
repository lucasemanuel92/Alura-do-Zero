// Crie um selecionador de temperatura e que calcule a conversão
function selecionador(temperatura, escala) {
    if (escala.toLowerCase() === "celsius") {
        return (temperatura * 9 / 5) + 32;
    } else if (escala.toLowerCase() === "fahrenheit") {
        return (temperatura - 32) *5 / 9;
    } else {
        return 'Escala não encontrada'
    }
}

let temperaturaCelsius = 0;
let resultado = selecionador(temperaturaCelsius, 'celsius');
console.log(resultado);