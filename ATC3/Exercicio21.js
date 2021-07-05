var n = 0;
var impar = 0;
var par  = 0;
var mediap = 0;
var mediai = 0;
var readlineSync = require('readline-sync');
var i = 1;
console.log('                           Informe os números para calcular os primeiros números ímpares e pares, e a média de cada.\n                                      O programa encerra a leitura quando inserir o número 0.')

n = parseInt(readlineSync.question('Qual o numero '+i+':\n'));


while(n>0){
  
    if(n%2!=0){
        impar = impar + 1
        mediai = mediai + n;
        mediai = mediai/impar
    }
    if(n%2==0){
        par = par + 1
        mediap = mediap + n;
        mediap = mediap/par
    }
   i++
    n = parseInt(readlineSync.question('Qual o numero '+i+':\n' ));
    
}console.log('A quantidade de números ímpares é: ' + impar + ' e sua média é ' + mediai +'\nA quantidade de números pares é: '+par+' e sua média é '+mediap)
   

