/*Ler array numeros
encontrar os n primeiros números atravez de um laço de repetição for
apresentar resultados */
var numeros = [1,1,2,3,5,8,13,21,34,55,89];
var num = 5;
var readlineSync = require('readline-sync');

console.log('               Mostrar os X primeiros números da sequência.')

console.log('\ndada a sequência de números ')

for(i=0; i<numeros.length; i++){
         console.log(numeros[i] );
}
console.log('Os ' + num + '\n primeiros numeros são os:')
for(i=0; i<num;i++){
    console.log(numeros[i])
}

