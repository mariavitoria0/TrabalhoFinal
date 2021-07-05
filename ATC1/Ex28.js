//ler nota 1 e peso de nota 1
//ler nota 2 e peso de nota 2
// calcular a média por meio da equação matemática sendo, a soma dos resultados da multiplicação das notas pelos seus respectivos peso 
//dividido pela soma dos pesos
//apresentar resultado
var nota1 = 2;
var peso1 = 2;
var nota2 = 8;
var peso2 = 3;
var media = 0;

console.log('               Calculando a média ponderada das duas notas.')

    media = (nota1 * peso1) + (nota2*peso2)/(peso1+peso2)

console.log('\nA nota 1: '+nota1+' peso 1: '+peso1+'\nA Nota 2: '+nota2+' Peso 2: '+peso2)
console.log('\nA média ponderada das notas é: ' + media)