/*ler o nível de risco informado pelo usuário
verificar se o nível de risco é grave, sendo considerado grave maior que 9 
apresentar resultado*/
var nivel = 0;
var readline = require('readline-sync');

console.log('           Informar se o risco é grave.');

nivel = parseFloat(readline.question('\nDe 0 a 10, qual o nivel de risco?\n'));

    if (nivel > 9){
        console.log('O nível de risco é grave');
    } else {
        console.log('O nível de risco não é grave');
    }