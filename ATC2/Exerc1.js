/*ler o número 1 informado pelo usuário
ler o número 2 informado pelo usuário
realizar a soma dos dois
apresentar resultado*/
var n1 = 0;
var n2 = 0;
var soma = 0;
var readline = require('readline-sync');

console.log('              A soma de dois números.')

    n1 = parseFloat(readline.question('\nQual o primeiro numero?\n'));
    n2 = parseFloat(readline.question('Qual o segundo numero?\n'));
    soma = n1 + n2;
console.log('A soma dos dois números é ' + soma);
