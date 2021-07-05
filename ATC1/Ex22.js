/*ler quantidade de moedas de cada valor 
calcular o valor total multiplicando a quantidade de moedas pelo seu respectivo valor
calcular o valor total em reais, somando todos os resultados da multiplicação
apresentar resultados*/
var cent1 = 0;
var qnt1 = 0;
var cent5 = 20;
var qnt5 = 0;
var cent10 = 60;
var qnt10 = 0;
var cent25 = 15;
var qnt25 = 0 ;
var cent50 = 15;
var qnt50 = 0;
var real1 = 12;
var  qntreal = 0;
var realfinal = 0;

    qnt5 = cent5*0.05
    qnt10 = cent10*0.10
    qnt25 = cent25*0.25
    qnt50 = cent50*0.50
    qntreal = real1*1
    realfinal= qnt5+qnt10+qnt25+qnt50 + qntreal

console.log('       Calcular o valor total economizado no cofre.')

console.log('\nPedrinho economizou R$ ' + realfinal + ' em moedas.\n')