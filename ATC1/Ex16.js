//Ler peso do queijo, peso do presunto e peso da carne
//informar a quantidade de sanduíches que vão ser produzidos
//calcular o peso necessário de queijo através da multiplicação da quantidade pelo peso do queijo 
//fazer o mesmo com o presunto e a carne
//dividir por 1000 para transformar gramas em quilos 
//apresentar o resultado

var pesoqj = 50;
var pesopr = 50;
var pesocar= 100;
var qnt = 0;
var readlineSync = require('readline-sync');

console.log('           Informe a quantidade de sanduíches para saber a quantidade em kg de queijos, presuntos e carne que irá precisar.')

    qnt = parseFloat(readlineSync.question('\nQuantos sanduiches vao ser produzidos?'));
pesoqj = (qnt*pesoqj)/1000
pesopr = (qnt*pesopr)/1000
pesocar = (qnt*pesocar)/1000
    console.log('\nSão ' + pesoqj + 'kg de queijos que vão ser necessários.')
    console.log('São ' + pesopr + 'kg de presuntos que vão ser necessários.')
    console.log('São ' + pesocar + 'kg de carne que vão ser necessários\n')
