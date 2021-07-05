/*ler lado 1 informado pelo usuário 
ler lado 2 informado pelo usuário 
ler lado 3 informado pelo usuário
verificar se é um triângulo, de acordo com a condição de existência de um triângulo, se algum dos lados for menor que a diferença dos outros dois lados 
e maoir que a soma dos outros dois lados, não é considerado triângulo
verificar o tipo de triângulo que se forma, sendo, todos os lado iguais é um triângulo equilátero
todos os lados diferentes é um triângulo escaleno e
pelo menos dois lados iguais é um triângulo isósceles
apresentar resultado*/
var readlineSync = require('readline-sync');

console.log('            Verificar o tipo de triângulo que se forma.')

var lado1 = parseInt(readlineSync.question('\nQual o valor do primeiro lado?\n'));
var lado2 = parseInt(readlineSync.question('Qual o valor do segundo lado?\n'));
var lado3 = parseInt(readlineSync.question('Qual o valor do terceiro lado?\n'));

if ((lado2-lado3) > lado1 && lado1 > (lado2+lado3)){
console.log('não é um triângulo')
}else if((lado1-lado3) > lado2 && lado2 > (lado1+lado3)){
    console.log('Não é um triângulo')
}else if((lado2-lado1) > lado3 && lado3 > (lado2+lado1)){
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