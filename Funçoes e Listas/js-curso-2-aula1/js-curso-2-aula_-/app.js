// Integrar o HTML ao JavaScript
let listaDeNumerosSorteados = [];
let numeroLimite = 10;

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // Colocando a função para falar
    // (O que falar, 'lingua que será falada', {rate:velocidade})
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirChamadaInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 0 - 10');
}

exibirChamadaInicial();

// A função realiza alguma coisa, nesse caso ela vai ao HTML e indica o que vai acontecer quando eu usar esse botão
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou");
        // FORMATO = isso é aquilo ? se sim 'faça isso' : se não 'faça isso'
        let palavraTentantiva = tentativas > 1 ? 'tentativas' : 'tentativas';
        let mensagenTentativas = `Parabéns, você acertou usando ${tentativas} ${palavraTentantiva}`;
        exibirTextoNaTela('p', mensagenTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número é menor');
        } else {
            exibirTextoNaTela('p', 'O número é maior');
        }
        tentativas++;
        limparCampo();
    } 
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtnElemenosLista = listaDeNumerosSorteados.length;
    // Comando para limpar a lista quando ela estiver cheia
    if (qtnElemenosLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    // Adicionar o numero recem sorteado para que não seja sorteado de novo
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirChamadaInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}