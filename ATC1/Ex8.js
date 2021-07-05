/*ler nota 1 e ler peso da nota 1
ler nota 2 e ler peso da nota 2
ler nota 3 e ler peso da nota 3
calcular a média ponderada
multiplicando cada nota com seu respectivo peso e somar o resultado da multplicação 
somar os pesos e dividir a soma do resultado da multiplicação pela soma dos pesos
Apresentar o resultado*/
var nota1 = 8.5
var peson1 = 1
var nota2 = 7.0
var peson2 = 2
var nota3 = 5.5
var peson3 = 3
var soma1 = 0;
var soma2 = 0;
    soma1 = nota1*peson1 + nota2*peson2 + nota3*peson3
    soma2 = peson1 + peson2 + peson3
var media = 0;
    media = soma1/soma2

console.log('           Informar a média das notas.')

console.log("\nnota 1: " + nota1 + '     Peso 1: ' + peson1) 
console.log("nota 2: " + nota2 + '       Peso 2: ' + peson2)
console.log("nota 3: " + nota3 + "     Peso 3: " + peson3)
console.log("\nMédia Ponderada:" + media)
