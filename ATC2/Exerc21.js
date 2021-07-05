//ler ano 
//ler preço do carro 
//calcular o imposto considerando o ano
//apresentar resultados
var ano = 0;
var preço = 0;
var imposto = 0;
var readlineSync = require('readline-sync');

console.log('           Qual o preço do imposto a ser pago para transferência do veículo.');

ano = parseInt(readlineSync.question('\nQual o ano do seu carro?\n'));
preço = parseInt(readlineSync.question('Qual o preco do seu carro?\n'));

if(ano<1990){
    imposto=preço*0.01
    console.log('o valor do imposto que você vai pagar para realizar a transferência é de R$' + imposto);
}else if(ano>=1990){
    imposto=preço*0.015
    console.log('o valor do imposto que você vai pagar para realizar a transferência é de R$' + imposto);
}

