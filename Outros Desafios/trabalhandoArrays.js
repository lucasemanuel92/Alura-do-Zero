// Trabalhando com Arrays
// Criando um array vazio
let lista = [];

// colocando elementos nela usando o '.push()'
lista.push(1, 2, 3);

// Outro array
let outraLista = [4, 4, 6];

// Concatenando elementos usando o '.concat()'
let listaFinal = lista.concat(outraLista);
console.log(listaFinal)

// Removendo o ultimo elemento usando '.pop()'
listaFinal.pop();
console.log(listaFinal);

// Embaralhando o array
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Embaralhando novaLista
  listaFinal = embaralharArray(listaFinal);
  console.log(listaFinal);

// Função para remover duplicatas de um array
function removerDuplicatas(array) {
    return [...new Set(array)];
  }
  
// Testando a função com novaLista
let semDuplicados = removerDuplicatas(listaFinal);
console.log(semDuplicados);