//ler valor informado pelo usuário 
//calcular a área do triângulo
//sendo lado*lado/2
//apresentar resultados

var readlineSync = require('readline-sync');

console.log('           Calculando a área de um triângulo.')

var lado1 = parseInt(readlineSync.question('\nQual o valor do primeiro lado?\n'));
var lado2 = parseInt(readlineSync.question('Qual o valor do segundo lado?\n'));
var lado3 = parseInt(readlineSync.question('Qual o valor do terceiro lado?\n'))
var area = 0;
    area = (lado1*lado2)/2
console.log('A área desse triângulo é igual a ' + area + 'm² ')
