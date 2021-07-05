/*ler o peso em quilogramas
transformar o peso em gramas multiplicando por 1000
apresentar resultados*/
var pesokg = 0;
var pesog = 0;
var readlineSync = require('readline-sync');
console.log('               Transformando o peso em Kg para gramas.');

pesokg = parseFloat(readlineSync.question('\nQual o seu peso atual? \n'))

pesog = pesokg * 1000
console.log('o peso em gramas é ' + pesog + 'g.')