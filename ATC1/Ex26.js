/* Ler o número 1 que foi informado
ler o número 2 que foi informado
ler o número 3 que foi informado
realizar a multiplicação dos numeros
apresentar resultado*/

var n1 = 0;
var n2 = 0;
var n3 = 0;
var mult = 0;
var readlineSync = require('readline-sync')

console.log('           Calculando o produto de três números.')

    n1 = parseFloat(readlineSync.question('\nQual o primeiro numero?\n'))
    n2 = parseFloat(readlineSync.question('Qual o segundo numero?\n'))
    n3 = parseFloat(readlineSync.question('Qual o terceiro numero?\n'))
mult = n1 * n2 *n3
    console.log('Resultado da multiplicação entre os números é: ' + mult)