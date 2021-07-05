//ler valor de notas informado pelo usuário
//calcular sua média, sendo, média=soma de todas as notas/quantidade de notas
//apresentar resultados
var readlineSync = require('readline-sync');

console.log('       Informar se o aluno foi aprovado ou reprovado.')

var nota1 = parseInt(readlineSync.question('\nQual a primeira nota?\n'));
var nota2 = parseInt(readlineSync.question('Qual a segunda nota?\n'));
var nota3 = parseInt(readlineSync.question('Qual a terceira nota?\n'));
var nota4 = parseInt(readlineSync.question('Qual a quarta nota?\n'));
var media = 0;

    media = (nota1 + nota2 + nota3 + nota4)/4
if (media>=6){
    console.log('Aprovado')
}else if(media<6){
    console.log('Reprovado')
}
