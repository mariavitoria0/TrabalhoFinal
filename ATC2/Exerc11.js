//ler valor de notas informado pelo usuário
//ler o peso de ca nota informado pelo usuário
//calcular sua média, sendo, média=soma de todas as notas*peso de cada nota/soma dos pesos
//apresentar resultados
var readlineSync = require('readline-sync');

console.log('           Informar se o aluno foi aprovado ou reprovado.');

var nota1 = parseInt(readlineSync.question('\nQual a primeira nota?\n'));
var peso1 = parseFloat(readlineSync.question('Qual o peso da nota 1? \n'));
var nota2 = parseInt(readlineSync.question('Qual a segunda nota?\n'));
var peso2 = parseFloat(readlineSync.question('qual o peso da nota 2?\n '));
var nota3 = parseInt(readlineSync.question('Qual a terceira nota?\n'));
var peso3 = parseInt(readlineSync.question('Qual o peso da nota3?\n '));
var nota4 = parseInt(readlineSync.question('Qual a quarta nota?\n'));
var peso4 = parseInt(readlineSync.question('qual o peso da nota 4?\n '));
var media = 0;

    media = (nota1*peso1 + nota2*peso2 + nota3*peso3 + nota4*peso4)/(peso1+peso2+peso3+peso4)
if(peso1+peso2+peso3+peso4<10){
    if (media>=6){
    console.log('Aprovado')
}else if(media<6){
    console.log('Reprovado')
}
}else{
   console.log('A soma dos pesos não pode passar de 10.'); 
}
