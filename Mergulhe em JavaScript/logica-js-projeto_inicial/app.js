alert("Bem vindo ao jogo do número secreto");
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // O parseInt pega só a parte inteira do número

let guess // Criar a variável para ser determina depois
let tentativas = 1; // Iniciar um contador de tentativas

// Um laço para fazer o jogo rodar até acertar o número
while (numeroSecreto != guess) {
    guess = prompt(`Escolha um número entre 0 - ${numeroMaximo}: `);

    // Se o chute for certo
    if (numeroSecreto == guess) {
        break;
    } else {
        if (numeroSecreto > guess) {
            alert(`O número é maior que ${guess}`);
        } else {
            alert(`O número é menor que ${guess}`);
        }
        // tentativas = tentativas + 1;  Outra forma de escrever
        tentativas++;
    }
}
// Colocando o singular e plural
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert(`Isso ai!!! Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`)

// if (tentativas > 1) {
//     alert(`Você acertou!!! O número secreto é ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//     alert(`Você acertou!!! O número secreto é ${numeroSecreto} com ${tentativas} tentativa`);
// }



