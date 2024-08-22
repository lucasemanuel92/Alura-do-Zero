// Criar um array para listar os amigos
let amigos = []; 

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo.value); // Isso é para o nome ser adicionado ao array
    
    // O if serve para não substituir o nome e sim adicionar ele
    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = nomeAmigo.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
    }
    nomeAmigo.value = '';

    // Atualizar lista caso seja removido
    atualizarLista();
    atualizarSorteio();
}

function sortear() {
    // Chama a função embaralha e coloca o array como parâmetro
    embaralha(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    // Esse laço vai pegar os elementos embaralhados e associa e 'deprecia' a lista
    for (let i = 0; i < amigos.length; i++) {
        if (i === amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>'
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>'
        }
    }
}

// Opção de excluir um amigo
function excluir() {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

// Foi dada pronta no curso
function embaralha(lista) {
    for (let indice = lista.lenght; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio]], [lista[indice -1]];
    }
}

// Atualizar sorteio
function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

// Atualizar Lista 
function atualizarLista() {
    let listaAmigos = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        // Adiciona clique para excluir
        paragrafo.addEventListener('click', function() {
            excluir(i);

            listaAmigos.appendChild(paragrafo);
        })
    }
}

function reiniciar() {
    // Zera o array
    amigos = [];
    // Colocar um vazio na tag
    document.getElementById('lista-amigos').innerHTML = '';
    // Colocar um vazio na lista do sorteio
    document.getElementById('lista-sorteio').innerHTML = '';
}