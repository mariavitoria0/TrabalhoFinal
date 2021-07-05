/*ler o primeiro número
ler o segundo número 
realizar a divisão do primeiro número pelo segundo número 
apresentar resultados*/

var n1 = 0;
var n2 = 0;
var div = 0;
var readline = require('readline-sync') 

console.log('           Calculando a divisão do primeiro número pelo segundo.')

    n1 = parseFloat(readline.question('\nQual o primeiro numero?\n'))
    n2 = parseFloat(readline.question('Qual o segundo numero?\n'))
    div = n1/n2
    console.log('o resultado da divisão feita entre os dois numeros é: ' + div)