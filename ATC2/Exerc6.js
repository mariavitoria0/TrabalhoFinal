/*ler o nível de risco informado pelo usuário
verificar se o nível de risco é baixo, sendo de 0 a 3
verificar se o nível de risco é médio, sendo maior que 3 até 6
verificar se o nível de risco é alto, sendo maior que 6 até 9
verificar se o nível de risco é grave, sendo maior que 9
apresentar resultados*/
var readlineSync = require('readline-sync');
console.log('           Verificando o nível de risco.')

var nivel = parseInt(readlineSync.question('\nQual o nivel de risco?\n'));

if (nivel <= 3){
    console.log('O nível de risco é baixo')
} else if(nivel>3 && nivel <= 6){
    console.log('O nível de risco é médio')
}else if(nivel > 6 && nivel <=9){
    console.log('O nível de risco é alto')
} else{
    console.log('O nível de risco é grave')
}