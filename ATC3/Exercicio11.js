/*ler valor de array n
utilizar laço de repetição para somar os numeros pares, sendo o numero dividido por 2 com resto igual a 0
e somar os números ímpares, sendo, os números divididos por 2 com resto diferente de 0 
programa para a soma quando entrar um número maior que 1000
apresentar resultados */
var n = [2,56,32,2001,47,10,32,1,52,28,27,33,25];
var par = 0;
var impar = 0;
 i=0;
var nm = 1001;

console.log('               A soma dos números pares e a soma dos números ímpares.')

for(i=0; i<n.length && n[i]<=1000; i++){
    if(n[i] <= 1000){ 
         if(n[i]%2 ==0){
            par = par + n[i]
        }
        if(n[i]%2 != 0){
        impar = impar + n[i]
        }
    }
    else{
        console.log('numero digitado maior que 1000')
    }
}console.log('\nA soma dos numeros pares é ' + par + '\nE a soma dos números ímpares é ' + impar);    
