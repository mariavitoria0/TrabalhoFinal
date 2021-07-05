/*ler preço do pão e ler quantidade de pães
ler preço de broa e ler quantidade de broas
calcular as vendas por meio da soma dos resultados da multiplicação feita entre a quantidade e seus respectivos preços 
calcular 10% das vendas (0,10)
mostrar resultado*/

console.log('       Calcular a quantidade de pães e quantidade de broas vendidos \n            E quanto guardar em uma conta poupança.')

var pao = 0.12;
var qntpao = 30;
var broa = 1.50
var qntbroa = 20
var poupança = 0;
var vendas = 0;

vendas = (pao*qntpao)+(broa*qntbroa);
poupança = vendas*0.10
console.log('\nO preço do pão é R$0,12 e o preço da broa é R$1,50');

console.log('quantidade de pães: ' + qntpao);
console.log('quantidade de broas: ' + qntbroa);
console.log('\n'+ qntpao + ' x ' + pao + ' = ' + qntpao*pao);
console.log('\n'+qntbroa + ' x ' + broa + ' = ' + qntbroa*broa);


console.log('\nA quantidade de venda arrecadada do dia é ' + vendas);
console.log(poupança + ' é os 10% da venda que vai ser guardado em uma conta de poupança.');
