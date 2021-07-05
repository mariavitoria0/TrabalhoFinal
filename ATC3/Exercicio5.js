/*ler o valor digitado pelo usuario
verificar se o numero é primo ou não
apresentar resultados
 */
console.log('                   Calcular o produto dos números.')

var readlineSync = require('readline-sync');
var num = 0;
var qnt = 0;
var prod = 0;
var i=1;
qnt = parseInt(readlineSync.question('Digite a quantidade de numeros que deseja calcular o produto \n '));

if(qnt >=1){
    num = parseInt(readlineSync.question('Informe o numero 1:\n '))
    prod = num 
    while(i<qnt){
    i++
    num = parseInt(readlineSync.question('Informe o numero ' + i + ':\n '));
    prod = prod* num
    }console.log('o produto dos números informados é: ' + prod)
} 