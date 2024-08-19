// Fazer esse carrinho de compras funcionar

// Inciando o calculo do preço total
let totalFinal = 0; 
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';

function adicionar() {
    // Recuperar os valores: Nome/quantidade/valor
    let produto = document.getElementById('produto').value;
    // O ".split()" é moldado pelo elemento que se quer separar e a posição que ele se encontra (é um array)
    let nomeProduto = produto.split('-')[0]; // Antes do split
    let valorUnitario = produto.split('R$')[1]; // Depois do split
    let quantidade = document.getElementById('quantidade').value;
    
    // Calcular o preço por produto (subtotal) = valor unidade * quantidade 
    let subtotal = quantidade * valorUnitario;

    // Adicionar ao carrinho
    // A tag section é o que adiciona o elemento no carrinho
    let listaCarrinho = document.getElementById('lista-produtos');
    // Adiciona no HTML uma nova section
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${subtotal}</span>
        </section>`

    // Soma dos subtotais
    totalFinal = totalFinal + subtotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalFinal}`;
    // Limpar a quantidade após adicionar um elemento
    document.getElementById('quantidade').value = 0; 
}

function limpar() {
    // O limpar volta ao início do elemento, logo eu posso usar o estado original
    totalFinal = 0; 
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';

}