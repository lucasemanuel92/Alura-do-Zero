// Exercícios do curso Lógica de Programação: Condicionais e Concatenação da Alura

let diaSemana = prompt('Qual é o dia da semana: ');
if (diaSemana == 'Sábado') {
    console.log("Bom fim de semana");
} else if (diaSemana == "Domingo") {
    console.log("Bom fim de semana");
} else {
    console.log("Boa semana");
}

let numero = prompt("Insira um numero qualquer: ");
if (numero >= 0) {
    console.log("O numero é positivo");
} else {
    console.log("O número é negativo");
}

let pontuação = 110; 
if (pontuação >= 100) {
    console.log("PARABENS, VOCÊ VENCEU!!!");
} else {
    console.log("Tente novamente");
}

let saldoDaConta = 1523.45;
console.log(`O saldo da conta é ${saldoDaConta}`);

let nome = prompt('Qual o seu nome? ');
//alert(`Boas vindas ${nome}`);