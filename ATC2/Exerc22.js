//ler o cargo informado pelo usuário
//ler salário inicial informado pelo usuário
//calcular o aumento de acordo com o cargo
//apresentar resultados
var ant = 0;
var car 
var nv = 0;
var cod101 = ant*0.10+ant;
var readlineSync = require('readline-sync');

console.log('               Calculando o novo salário.')

car = readlineSync.question('\nQual o seu cargo?\n');
ant = parseInt(readlineSync.question('Informe seu salario para saber sobre o aumento salarial\n'))

if(car == 'gerente'){
   nv = (ant*0.10)+ant;
}
else if (car == 'engenheiro'){
    nv = (ant*0.20)+ant
}
else if(car == 'tecnico'){
    nv = (ant * 0.30)+ant
}
else {
    nv = (ant*0.40) +ant
}
console.log('Seu antigo salário é ' + ant + '\nVocê recebeu um aumento de R$' + (nv-ant) + '\nSeu novo salário é no valor de R$' + nv)