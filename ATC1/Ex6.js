//ler valor do kg de refeição 
//ler o peso do prato montado pelo cliente
//calcular o valor a ser pago, através da multiplicação feita entre o valor do kg e o peso do prato montado pelo cliente
//apresentar resultado

console.log('       Calcular o preço de acordo com o peso do prato montado pelo cliente.')

var valorkg = 12.00;
var kg = 15;
var total = 0;
total = valorkg * kg
console.log("\nR$" + valorkg + ' por cada quilo de refeição.')
console.log('\nPeso do prato do cliente: ' + kg + 'kg')
console.log('\n'+valorkg + ' x ' + kg + ' = ' + total)
console.log('Obs: inclui o desconto do peso do prato')