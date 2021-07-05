/*ler o número que vai ser calculado
multiplicá-lo por 0 a 10
apresentar resultados*/
var n = 0;
var readline = require('readline-sync')
console.log('               Tabuada de 0 a 10')

n = parseFloat(readline.question('\nQual numero deseja calcular?\n '));
console.log(n + ' x 0 = ' + n*0)
console.log(n + ' x 1 = ' + n*1)
console.log(n + ' x 2 = ' + n*2)
console.log(n + ' x 3 = ' + n*3)
console.log(n + ' x 4 = ' + n*4)
console.log(n + ' x 5 = ' + n*5)
console.log(n + ' x 6 = ' + n*6)
console.log(n + ' x 7 = ' + n*7)
console.log(n + ' x 8 = ' + n*8)
console.log(n + ' x 9 = ' + n*9)
console.log(n + ' x 10 = ' + n*10)
