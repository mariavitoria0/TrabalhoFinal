/*ler o preço da camisa p 
ler o preço da camisa m
ler o preço da camisa g
calcular a quantidade de camiseta com seus respectivos preços, multiplicando quantidade pelo preço
calcular o valor arrecadado da venda de todas as camisas 
Apresentar resultado*/
var readlineSync = require('readline-sync')
var p = 0;
var m = 0;
var g = 0;
var prçp = 10;
var prçm = 12;
var prçg = 15;
var vendap = 0;
var vendam = 0;
var vendag = 0;
var valotl = 0;

console.log('       Informe a quantidade de camisas vendidas de cada tamanho para saber o valor arrecadado.')

    p = parseFloat(readlineSync.question('Qual a quantidade de camisa de tamanho P? \n'));
    m = parseFloat(readlineSync.question('Qual a quantidade de camisa de tamanho M? \n'));
    g = parseFloat(readlineSync.question('Qual a quantidade de camisa de tamanho G? \n'));
vendap = p*prçp
vendam = m*prçm
vendag = g*prçg
valotl = vendap + vendam + vendag
    console.log('\nO valor arrecadado nas compras de todas as camisetas foi de R$' + valotl)
