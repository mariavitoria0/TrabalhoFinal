//ler o peso atual 
//calcular o valor do peso se engordar 15%, multiplicando o peso atual por 0,15 e somar com o peso atual
//calcular o valor do peso se emagrecer 20%, diminuindo o peso atual pelo resultado da multiplicação do peso atual por 0,20
//apresentar resultados
var peso = 0;
var peso15 = 0;
var peso20 = 0;
var readline = require('readline-sync')

console.log('           Calcular o peso se a pessoa engordar 15% e se a pessoa emagrecer 20%')

    peso = parseFloat(readline.question('\nQual o seu peso atual?\n'));
    peso15 = (peso*0.15) + peso;
    peso20 = peso - (peso*0.20);
console.log('Se você engordar 15%, seu peso é de ' + peso15 + 'kg')
console.log('se você emagrecer 20%, seu peso é de ' + peso20 + 'kg\n') 