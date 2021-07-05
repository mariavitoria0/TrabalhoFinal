/*ler o nivel de risco informado pelo usuário 
verificar se o nível de risco está entre 0 e 10
verificar se o nível de risco é grave, sendo considerado grave maior que 9
apresentar resultados*/
var readlineSync = require('readline-sync');

console.log('           Verficando se está em um nível de risco grave');

var nivel = parseFloat(readlineSync.question('\nDe 0 a 10, qual o nivel?\n'))


if (nivel > 10){
    console.log('Erro, insira um número de 0 a 10')
} else if (nivel > 9){
    console.log('O nível de risco é grave')
}else {
    console.log('O nível de risco é normal')
}