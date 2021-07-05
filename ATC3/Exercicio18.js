/*ler valores de array alturas 
calcular e mostra a maior e a menor
 */

var alturas = [1.30,1.65,1.62,1.45,1.53,1.58,1.59,1.67,1.70,1.75,1.83,1.88,1.72,1.85,1.92];

console.log('           Ler a altura de 15 pessoas e calcular qual a menor e qual a maior.')

console.log('A menor altura é ' + Math.min.apply(Math,alturas))
console.log('A maior altura é ' + Math.max.apply(Math,alturas))