/*ler parte de água necessário
ler parte de suco necessário
dividir a quantidade de litros informada por 10
calcular quantos litros serão necessarios de suco e água
através da multiplicação feita entre o resultado da divisão pela parte necessária de cada item
apresentar resultados*/
var agua = 8 
var suco = 2
var litros = 0;
var lsucos = 0;
var lagua = 0;
var part = 0;
var readlineSync = require('readline-sync')

console.log('           Calcular quantos litros de água e suco são necessários para fazer X litros de refresco.')

litros = parseFloat(readlineSync.question("\nQuantos litros de refresco vai querer que seja feito?"))
part = litros/10
lsucos = part * suco
lagua = part * agua

    console.log('\nSão necessários ' + lagua + 'L de água')
    console.log('São necessários ' + lsucos + 'L de sucos de maracujá\n')
