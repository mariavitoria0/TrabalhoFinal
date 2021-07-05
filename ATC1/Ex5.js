/*ler valor do pagamento 
ler preço do litro da gasolina
calcular a quantidade de litros que foi comprada, através da divisão do valor que foi pago pelo preço do litro 
apresentar resultado*/

console.log('           Exibir quantos litros conseguiu colocar no tanque.')

var pag = 100
var prçgas = 5
var total = 0;
total = pag / prçgas 

console.log('\n Litro da gasolina: ' + prçgas + ' reais')
console.log('valor do pagamento: ' + pag + ' reais')
console.log('\n'+pag + ' / ' + prçgas + ' = ' + total)
console.log('\n'+total + ' foi a quantidade de litros colocada.')
