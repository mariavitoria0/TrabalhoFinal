//ler valor de dia
//ler valor de mês
//ler valor de ano
//considerando começo de mês, começo de ano, ano bissexto
//calcular qual a data seguinte
//apresentar resultados

var dia = 0;
var mes = 0;
var ano = 0;
var readlineSync = require('readline-sync');

console.log('           Data anterior.')

console.log('\nInforme a data de hoje');
dia = parseInt(readlineSync.question('\nQual o dia de hoje?\n'));
mes = parseInt(readlineSync.question('Qual o mes?\n'));
ano = parseInt(readlineSync.question('Qual o ano?\n'));

if(dia==01&&mes==01){
    dia=31; mes=12; ano--; ano=ano;
    console.log('Ontem foi ' + dia + ' do ' + mes + ' de ' + ano)
}else if(dia==01&&mes==05||dia==01&&mes==7||dia==01&&mes==08||dia==01&&mes==10||dia==01&&mes==12){
    dia=30; mes--; mes=mes;
    console.log('Ontem foi ' + dia + ' do ' + mes + ' de ' + ano)
}else if(dia==01&&mes==04||dia==01&&mes==06||dia==01&&mes==09||dia==01&&mes==11){
    dia=31; mes--; mes=mes;
    console.log('Ontem foi ' + dia + ' do ' + mes + ' de ' + ano)
}else if(dia==01&&mes==03){
    dia=29; mes--; mes=mes
    console.log('Ontem foi ' + dia + ' do ' + mes + ' de ' + ano)
}else if(dia>1&&dia<=31){
    dia--; dia=dia; 
    console.log('Ontem foi ' + dia + ' do ' + mes + ' de ' + ano)
}
else{
    console.log('Você informou uma data incorreta')
}