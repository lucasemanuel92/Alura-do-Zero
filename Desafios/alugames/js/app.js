// O desafio é mudar a condição de alugado para disponível e vice-versa
// Inicializando os jogos alugados
let jogosAlugados = 0;

// Criando uma função para contar os jogos alugados
function contarExibirJogos() {
console.log(`Total de jogos alugados: ${jogosAlugados}`);}

function alterarStatus(id) {
    let gameSelecionado = document.getElementById(`game-${id}`);
    let imagem = gameSelecionado.querySelector('.dashboard__item__img');
    let botao = gameSelecionado.querySelector('.dashboard__item__button');
    let nomeJogo = gameSelecionado.querySelector('.dashboard__item__name'); 
    
    // Dentro do if temos (variável.chamarListaDeClasses.temEssaClasse('.nome__da__classe'))
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Para confirmar que quer devolver o jogo
        if (confirm(`Tem certeza que quer devolver ${nomeJogo.textContent}?`)) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--; // Elimina um da lista
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++; // Adiciona um a lista
    }

    contarExibirJogos();
}

// Começar contando a partir dos jogos que já estão alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item_img--rented').length()
})


