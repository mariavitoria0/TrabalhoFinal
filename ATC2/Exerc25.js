//ler valores dos lados informados pelo usuário
//verificar se é triângulo ou não 
//sendo, se algum dos lados for menor que a diferença dos outros dois lados 
//e maoir que a soma dos outros dois lados, não é considerado triângulo
//verificar o tipo de triângulo que se forma, sendo, todos os lado iguais é um triângulo equilátero
//todos os lados diferentes é um triângulo escaleno e
//pelo menos dois lados iguais é um triângulo isósceles
//apresentar resultados
var readlineSync = require('readline-sync');

console.log('                 Verificar se os dados informados podem ser os comprimentos dos lados de um triângulo.')

var lado1 = parseInt(readlineSync.question('\nQual o valor do primeiro lado?\n'));
var lado2 = parseInt(readlineSync.question('Qual o valor do segundo lado?\n'));
var lado3 = parseInt(readlineSync.question('Qual o valor do terceiro lado?\n'));

if (lado1 > (lado2+lado3)){
console.log('não é um triângulo')
}else if(lado2 > (lado1+lado3)){
    console.log('Não é um triângulo')
}else if(lado3 > (lado2+lado1)){
    console.log('Não é um triangulo')
}else if (lado1 == lado2 && lado1 !== lado3){
         console.log('É um triângulo isósceles.')
    }else if(lado2 == lado3 && lado2 !== lado1){
         console.log('É um triângulo isósceles.')
    }else if(lado3 == lado1 && lado3 !== lado2){
         console.log('É um triângulo isósceles.')
    }else if(lado1 == lado2 && lado2 == lado3){
         console.log('É um triângulo equilátero.')
    }else if(lado1 !== lado2 && lado1 !== lado3 && lado3 !== lado2){
          console.log('É um triângulo escaleno.')
    }