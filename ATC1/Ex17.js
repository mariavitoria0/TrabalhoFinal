/*ler temperatura em Celsius
converter em Fahrenheit utilizando a equação matemática: °f =(°C x 1,8) + 32
apresentar resultado*/
var c = 0;
var f = 0;
var readlineSync = require('readline-sync')
console.log('               Informe uma temperatura em Celsius para saber quanto corresponde em Fahrenheit. ')
c = parseFloat(readlineSync.question('\nQual a temperatura que deseja converter?\n '));

f = c * 1.8 + 32

 console.log('\nA temperatura em celsius é de ' + c + '°C')
 console.log('Logo, a temperatura em Fahrenheit é de ' + f + '°F\n')