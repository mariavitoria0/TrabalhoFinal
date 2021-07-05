/*ler n numeros informados pelo usuário
utilizando um laço de repetição para encontrar os n primeiros números pares e ímpares
apresentar resultados */
var n = 0;
var readlineSync = require('readline-sync')

console.log('                       Para verificar os primeiros números pares e primeiros números ímpares \nInforme: ')
 n = parseInt(readlineSync.question('Quantos numeros vai querer ver? \n'))
console.log('os ' + n + ' primeiros números pares são: ')
for(i=0; i<n*2; i++){
    if(i%2==0){
        console.log(i)
    }
}
console.log('os ' + n + ' primeiros números ímpares são: ')
for(i=0; i<n*2; i++){
    if(i%2!=0){
        console.log(i)
    }
}
