/*ler quantidade de refrigerantes de 350ml
ler quantidade de refrigerantes de 600ml
ler quantidade de refrigerantes de 2l
transformar Ml em litros 
apresentar resultado*/ 
var ml350 = 0;
var ml600 = 0;
var l2 = 0;
var litros2 = 0;
var l350 = 0;
var l600 = 0;
var lfinal = 0;
var readlineSync = require('readline-sync')

console.log('           Calcular quantos litros de refrigerantes foram comprados.')

    ml350 = parseFloat(readlineSync.question('\nQuantos refrigerantes Meia-cola lata 350ml vai comprar? \n'));
    ml600 = parseFloat(readlineSync.question('Quantos refrigerantes Meia-cola garrafa 600ml vai comprar? \n'));
    l2 = parseFloat(readlineSync.question('Quantos refrigerantes Meia-cola garrafa 2L vai comprar? \n'));
l350 = (ml350 * 350)/1000
l600 = (ml600*600)/1000
litros2 = l2 * 2
lfinal = litros2 + l350 + l600
    console.log('Foram comprados ' + lfinal + ' litros do refrigerantes Meia-cola')