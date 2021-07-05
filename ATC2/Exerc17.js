//ler valor de dia
//ler valor de mês
//ler valor de ano
//considerando final de mês, final de ano, ano bissexto
//calcular qual a data seguinte
//apresentar resultados
var dia = 0;
var mes = 0;
var ano = 0;
var readlineSync = require('readline-sync');

console.log('           Data seguinte.')

dia = parseInt(readlineSync.question('\nQual o dia de hoje?\n'));
mes = parseInt(readlineSync.question('Qual o mes?\n'));
ano = parseInt(readlineSync.question('Qual o ano?\n'))

 if (dia==30&&mes==1||dia==30&&mes==3||dia==30&&mes==5||dia==30&&mes==7||dia==30&&mes==8||dia==30&&mes==10||dia==30&&mes==12){
     dia++; dia=dia
   console.log('Amanhã será dia ' + dia + ' do ' + mes + ' de ' + ano)
 }else if(dia==30&&mes==4||dia==30&&mes==6||dia==30&&mes==9||dia==30&&mes==11){
     dia=01
        mes++; mes=mes
    console.log('Amanhã será dia ' + dia + ' do ' + mes + ' de ' + ano)
 }else if(dia==29 && mes == 02 ){
     dia=01
     mes=03
     console.log('Amanhã será dia ' + dia + ' do ' + mes + ' de ' + ano)
 }else if(dia==31&&mes==1||dia==31&&mes==3||dia==31&&mes==5||dia==31&&mes==7||dia==31&&mes==8||dia==31&&mes==10){
     dia=01
     mes++; mes=mes
     console.log('Amanhã será dia ' + dia + ' do ' + mes + ' de ' + ano)
 }else if(dia==31 && mes == 12){
     dia=01; mes=01; ano++; ano=ano
     console.log('Amanhã será dia ' + dia + ' do ' + mes + ' de ' + ano)
 }
 
 else if(dia<=29){
     dia++; dia=dia
     console.log('Amanhã será dia ' + dia + ' do ' + mes + ' de ' + ano)
 }
 else{
     console.log('Você informou uma data incorreta')
 }