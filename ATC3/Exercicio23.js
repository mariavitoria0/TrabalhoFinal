/*ler valor n, sendo n informado pelo usuário
mostrar a tabuada de 0 a 10 */
var n = 0;
var readlineSync = require('readline-sync');

n = parseInt(readlineSync.question('\nDe 0 a 10, qual numero voce quer ver a tabuada? \n'));


for(i=0;i<=10;i++){
    console.log(i + ' x '+ n +' = ' + i*n)
}