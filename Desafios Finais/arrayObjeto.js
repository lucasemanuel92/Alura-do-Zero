// Uma funcão que receba elementos de um array e verifique o objeto presente
function objetoArray(arr, objeto) {
    return arr.some(item => JSON.stringify(item) === JSON.stringify(objeto));
}

const alunos = [
    {id: 1, nome: 'João', idade: 20},
    {id: 2, nome: 'Pedro', idade: 18},
    {id: 3, nome: 'Maria', idade: 20}
]

const alunoProcurado = {id: 3, nome: 'Maria', idade: 20};
const objetoPresente = objetoArray(alunos, alunoProcurado)

if (objetoPresente) {
    console.log('Aluno presente')
} else {
    console.log('Aluno não está presente')
}