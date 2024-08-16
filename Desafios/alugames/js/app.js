// O desafio é mudar a condição de alugado para disponível e vice-versa

function alterarStatus(id) {
    let gameSelecionado = document.getElementById(`game-${id}`);
    let imagem = gameSelecionado.querySelector('.dashboard__item__img');
    let botão = gameSelecionado.querySelector('.dashboard__item__button');
    let nomeJogo = gameSelecionado.querySelector('.dashboard__item__name');

    alert(nomeJogo.innerHTML); // Posso usar o inner html
}