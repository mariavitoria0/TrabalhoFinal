/*Ler quantidade de cavalos que o haras possuí
ler quantidade de patas de cada cavalo
calcular a quantidade de ferraduras que irá precisar, por meio da multiplicação entre a quantidade de cavalos e a quantidade de patas
mostrar o resultado*/
console.log('       Calculando quantas ferraduras são necessárias para \n         Equipar todos os cavalos comprados para um haras.')

var cavalos = 10;
var patas = 4;
var ferraduras = 0;

ferraduras = cavalos * patas;

console.log('O haras possuí ' + cavalos + ' cavalos.');
console.log('portanto, irá precisar de ' + ferraduras + ' ferraduras.');
console.log(cavalos + ' x ' + patas + ' = ' + ferraduras);
