/*ler valor de preço atual
calcular o valor dos 10% que vão ser descontados, pela multiplicação do preço atual por 0,10
calcular o novo preço subtraindo o preço antigo pelo valor do desconto
mostrar resultado*/
var preço = 15
var nvpreço = 0;
var desc = 0;
console.log('           Calculando o novo preço do produto com um desconto de 10%')
    desc = preço*0.10
    nvpreço = preço-desc

console.log('\nUm produto com preço de R$'+preço+' depois de um desconto de 10%:')
console.log('O novo preço do produto é R$' + nvpreço)