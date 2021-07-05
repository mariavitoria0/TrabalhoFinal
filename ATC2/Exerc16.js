//ler valor da temperatura informada
//ler qual a unidade de medida da temperatura 
//converter, sendo, se temperatura for celsius, c=temperatura-32/1.8
//se temperatura for fahrnheit, f=temperatura*1.8 + 32
//apresentar resultados
var c = 0;
var t = 0;
var esc =0;
var readlineSync = require('readline-sync');

console.log('           Convertendo temperaturas');

esc = readlineSync.question('\nQual a unidade de medida da temperatura que deseja converter? Fahrenheit ou Celsius?\n ')
t = parseFloat(readlineSync.question('Qual a temperatura?\n'))


if (esc == 'fahrenheit' || esc == 'f'){
    console.log(c = (t-32)/1.8 + '°C')
}else if(esc == 'celsius' || esc == 'c'){
    console.log(c = (t*1.8)+32 + '°F')
}