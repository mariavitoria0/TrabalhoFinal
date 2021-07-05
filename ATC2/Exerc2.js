/*ler o primeiro número informado pelo usuário 
ler o segundo número informado pelo usuário 
ler o terceiro número informado pelo usuário
verificar qual dos 3 números é o maior
apresentar resultados
*/
var n1 = 0;
var n2 = 0;
var n3 = 0;
var readline = require('readline-sync');

console.log('           Informar qual o maior número.')

n1 = parseFloat(readline.question('\nQual o primeiro numero?\n'));
n2 = parseFloat(readline.question('Qual o segundo numero?\n'));
n3 = parseFloat(readline.question('Qual o terceiro numero?\n'));
    if (n1>n2 && n1>n3){
        console.log(n1 + ' é o maior número')
    } else if (n2>n3){
        console.log(n2 + ' é o maior número')
    } else {
        console.log(n3 + ' é o maior número')
    }