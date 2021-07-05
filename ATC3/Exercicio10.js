/*ler ano antigo 
ler ano recente
calcular os dias decorridos, utilizando um laço de repetição for e  considerando o ano bissexto a cada 4 anos
sendo se o ano dividido por 4 for resto 0 e dividido por 100 for resto diferente de 0, acrescentar 366 dias
se nao acrescentar 365 dias
apresentar resultados */
var ant = 0;
var nv = 0;
var dias = 0;
var readlineSync = require('readline-sync');



console.log('                   Calcular os dias corridos de uma data antiga e uma data nova.');

ant = parseInt(readlineSync.question('\nInforme o ano mais antigo: \n'));
nv = parseInt(readlineSync.question('Informe o ano mais recente: \n'));

for(i=1950;i<=1996;i++){
    if(i%4 == 0 && i%100 != 0){
    dias = dias + 366
    }
    else{
        dias = dias + 365
    }

}console.log('\nforam percorridos ' + dias + ' dias.')

