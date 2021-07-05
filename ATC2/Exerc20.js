//ler valor em reais
//calcular quantas notas são necessárias para compor o valor 
//apresentar resultados
var n100 = 0;
var n50 = 0;
var n10 = 0;
var n5 = 0;
var n1 = 0;
var valor = 0;
var readlineSync = require('readline-sync');

console.log('                   Quantas notas são necessárias para decompor um determinado valor.')

valor = parseInt(readlineSync.question('\nQual valor deseja decompor?\n'))
console.log('Para decompor ' + valor + ' reais são necessários ')
while(valor>=100  ){
    n100++
    valor = valor - 100
    
}if(n100>=1){
    console.log(n100 +' notas de 100')
}
while (valor >=50){
    n50++
    valor = valor - 50
}if(n50>=1){
    console.log( n50 +' notas de 50')
}
while (valor>=10){
    n10++
    valor = valor - 10
}if(n10>=1){
    console.log(n10 +' notas de 10')
}
while(valor >=5){
    n5++
    valor = valor - 5
}if(n5>=1){
    console.log(n5 +' notas de 5')
}
while(valor>=1){
    n1++
    valor = valor - 1
}if(n1>=1){
    console.log(n1 +' notas de 1')
}
