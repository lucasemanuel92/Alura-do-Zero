// Implemente uma função que calcule a média de dois numeros e interrompa se um deles for inválido
function calcularMedia(num1, num2) {
    // 'isSomething' é como um boolean, 'NaN' é Not a Number
    if (isNaN(num1) || isNaN(num2)) {
        return 'Essa entrada não é válida, verifique o número'
    } else {
       return (num1 + num2) / 2
    }
}

console.log(calcularMedia(2, 'texto'))