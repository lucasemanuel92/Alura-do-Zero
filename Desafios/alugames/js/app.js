// O desafio é mudar a condição de alugado para disponível e vice-versa

function alterarStatus(id) {
    let gameSelecionado = document.getElementById(`game-${id}`);
    let imagem = gameSelecionado.querySelector('.dashboard__item__img');
    let botao = gameSelecionado.querySelector('.dashboard__item__button');
    // let nomeJogo = gameSelecionado.querySelector('.dashboard__item__name'); Usado no teste

    // Dentro do if temos (variável.chamarListaDeClasses.temEssaClasse('.nome__da__classe'))
    if (imagem.classList.contains('.dashboard__item__img--rented')) {
        if (confirm(`Tem certeza que quer devolver ${nomeJogo.textContent}?`)) {
        imagem.classList.remove('.dashboard__item__img--rented');
        botao.classList.remove('.dashboard__item__button--return');
        botao.textContent = 'Alugar';
        }
    } else {
        imagem.classList.add('.dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.remove('.dashboard__item__button--return');
    }

    // alert(nomeJogo.textContent); // Posso usar o ".innerHTML" // Teste para saber se estava funcionando
}