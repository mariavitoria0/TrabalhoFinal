//ler o código do pedido
//calcular o valor a ser pago pelo lanche
//apresentar resultados
var cod = 0;
var qnt = 0;
var total = 0;
var nvm = 0;
var readlineSync = require('readline-sync');

console.log('               Calculando o valor a ser pago pelo lanche.')

console.log('\n100 Cachorro quente        1,10 \n101 Bauru simples          1,30 \n102 Bauru c/ovo            1,50 \n103 Hamburguer             1,10 \n104 Cheeseburger           1,30 \n105 Refrigerante           1,00')
cod = parseInt(readlineSync.question('\nDigite o codigo do seu pedido. Apenas 1 codigo por vez \n'));
qnt = parseInt(readlineSync.question('Agora a quantidade:\n '));


if(cod == 100 || cod == 103){
    total = qnt * 1.10
}if(cod == 101 || cod == 104){
    total = qnt * 1.30
}if(cod == 102){
    total = qnt * 1.50
}if(cod == 105){
    total  = qnt * 1.00
}

console.log('o valor a ser pago é R$ ' + total)
/*
if(cod == 100 || cod == 103){
     total = qnt * 1.10
 }if(cod == 101 || cod == 104){
     total = qnt * 1.30
 }if(cod == 102){
     total = qnt * 1.50
 }if(cod == 105){
     total  = qnt * 1.00
 }
 
console.log('o valor a ser pago é R$ ' + total)*/
 
