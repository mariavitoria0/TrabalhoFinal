/*ler o primeiro número informado pelo usuário 
ler o segundo número informado pelo usuário 
ler o terceiro número informado pelo usuário
verificar se algum dos números são múltiplos dos outros números, dividindo eles entre si, sendo considerado múltiplo se o resto da divisão for igual a 0
apresentar resultados*/

var readlineSync = require('readline-sync');

console.log('       Dado três números, verificar se existe múltiplos.')
var n1 = parseInt(readlineSync.question('\nQual o primeiro numero?\n'));
var n2 = parseInt(readlineSync.question('Qual o segundo numero?\n'));
var n3 = parseInt(readlineSync.question('Qual o terceiro numero?\n'));

if(n1%n1 ==0){
    console.log(n1 + ' é múltiplo de ' + n1)
}if (n1%n2 == 0){
    console.log(n1 + ' é múltiplo de ' + n2)
}if (n1%n3 == 0){
    console.log(n1 + ' é múltiplo de ' + n3)
}if(n2%n2 == 0){
    console.log(n2 + ' é múltiplo de ' + n2)
}if (n2%n1 == 0){
    console.log(n2 + ' é múltiplo de ' + n1)
}if (n2%n3 == 0){
    console.log(n2 + ' é múltiplo de ' + n3)
}if(n3%n3 ==0){
    console.log(n3 + ' é múltiplo de ' + n3)
}if (n3%n1 == 0){
    console.log(n3 + ' é múltiplo de ' + n1)
}if (n3%n2 == 0){
    console.log(n3 + ' é múltiplo de ' + n2)
}