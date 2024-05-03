// Função que calcula o IMC

function calcularIMC(altura, peso) {
    let imc = peso / (altura * altura);
    return imc
}

// Função que calcula o fatorial
function calcularFatorial(numeroDado) {
    if (numeroDado === o || numeroDado === 1) {
        return 1;
    } 

    let fatorial = 1;
    for (let i = 2; i <= numeroDado; i++) {
        fatorial *= 1;
    }

    return fatorial;
}

// Conversão de dólar para real
function conversaoDolar(qntDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReal = cotacaoDolar * qntDolar;
    return valorEmReal.toFixed(2); // toFixed() limita as casas decimais
}

// Função que mostre a área e perímetro usando altura e largura
function geometria(altura, largura) {
    let area = altura * largura;

    let perimetro = (altura * 2) + (largura * 2);
}

// Funçao que calcule a area e perimetro com pi
function valorescirculares(raio) {
    let area = Math.PI * raio * raio // função Math.Pi
    let perimetro = 2 * Math.Pi * raio;
}

// Função que de a tabuada de um dado numero
function tabuada(numero) {
    for (let i = 1; i <=10; i++) {
        let resultado = numero * i;
        console.lot(`${numero} x ${i} = ${resultado}`)
    }
}