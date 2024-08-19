// Fazer esse carrinho de compras funcionar

function adicionar() {
    // Recuperar os valores: Nome/quantidade/valor
    let produto = document.getElementById('produto').value;
    // O ".split()" é moldado pelo elemento que se quer separar e a posição que ele se encontra (é um array)
    let nomeProduto = produto.split('-')[0]; // Antes do split
    let valorUnitario = produto.split('R$')[1]; // Depois do split
    let quantidade = document.getElementById('quantidade');

    let subtotal = quantidade.value * valorUnitario;

    alert(subtotal)

    
    // Calcular o preço por produto (subtotal) = valor unidade * quantidade 
    // Adicionar ao carrinho
    // Soma dos subtotais
}

function limpar() {

}