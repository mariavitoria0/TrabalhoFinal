/*somar todos os números ímpares múltiplos de 3 que estão entre 1 até 500
apresentar resultados */
var soma = 0
for(i=1; i<=500; i++){
    if(i%2!=0 && i%3==0){
        soma = soma + i;
    }
}console.log(' A soma dos números ímpares e múltiplos de 3 entre 1 a 500 é ' + soma);
