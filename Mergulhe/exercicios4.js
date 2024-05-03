// Escrever um comando de boas vindas
console.log("Seja Bem-Vindo");

// Uma variável com seu nome e colocar no console.
let name = "Lucas Carvalho"
console.log(`Seu nome é ${name}`);

// Uma variável como seu nome e criar um alerta
let nome = "Lucas"
alert(`Seu nome é ${nome}`);

// Perguntar a ling. de prog. preferida e mostrar no console
let linguagePreferida = prompt("Qual sua linguagem de prog. favorita?");
console.log(linguagePreferida)

// Criar 2 variáveis numéricas, somar e armazenar em uma terceira e mostrar no console
valor1 = 10;
valor2 = 18;
resultado = valor1 + valor2;

console.log(`A soma entre ${valor1} e ${valor2} é ${resultado}`);

// Criar 2 variáveis numéricas, subtrair e armazenar em uma terceira e mostrar no console
valor1 = 10;
valor2 = 18;
resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é ${resultado}`);

// Inserir a idade e usar "if" para verificar se é maior de idade
let idade = prompt("Insira sua idade: ");
if (idade >= 8) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade");
}

// Verifique se um número é positivo ou negativo e diga isso
let numero = parseFloat(prompt("Insira um numero qualquer: ")); // Dessa forma tb valem números quebrados

if (numero > 0) {
    console.log("Esse número é positivo");
} else if (numero === 0) {
    console.log("Esse número é nulo");
} else {
    console.log("Esse número é negativo");
}

// Loop para imprimir todos os numeros de 1 - 10
let start = 1;

while (start , 10) { 
    console.log(start);
    start++;
}

// Criar um nota e dizer aprovado ou reprovado
nota = 8.2;

if (nota >= 7) {
    console.log("Parabéns, você foi aprovado");
} else {
    console.log("Você foi reprovado.");
}

// Criar um numero com o Math.random() e exibir 
let number = Math.random();
console.log(number);

// Criar um número aleatório > 10
let numeroMisterioso = parseInt(Math.random() * 10) + 1;
console.log(numeroMisterioso);

// Criar um numero aleatório inteiro > 100
let numeroAleatorio = parseInt(Math.random() * 100) + 1;
console.log(numeroAleatorio);