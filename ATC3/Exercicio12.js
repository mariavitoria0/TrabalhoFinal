/*Ler conjunto 1
ler conjunto 2
ler conjunto 3
utilizando um laço de repetição for para somar, multiplicar e encontrar a média dos conjuntos de cada conjunto 
se o conjunto não estiver em ordem crescente o programa finaliza
apresentar resultados */ 
var cnj1 = [1,2,3]; var produto2 = 1;
var cnj2 = [8,6,7]; var produto3 = 1;
var cnj3 = [3,2,1]; var media2 = 0;
var soma = 0; var media3 = 0;
var soma2 = 0;
var soma3 = 0;
var produto = 1;
var media = 0;

console.log('               A soma dos números, o produto e sua média.')

if(cnj1[0] < cnj1[1]){
    for(i=0; i<cnj1.length; i++){
        soma = soma + cnj1[i];
        produto = produto * cnj1[i];
        media = soma/3
    }console.log('\nA soma do primeiro conjunto é ' + soma + '\nO produto do primeiro conjunto é ' + produto + '\nA média do primeiro conjunto é ' + media);
}
 
if(cnj2[0] < cnj2[1]){
    for(i=0; i<cnj2.length; i++){
        soma2 = soma2 + cnj2[i];
        produto2 = produto2 * cnj2[i];
        media2 = soma2/3
    }console.log('\nA soma do segundo conjunto é ' + soma2 + '\nO produto do segundo conjunto é ' + produto2 + '\nA média do segundo conjunto é ' + media2);
}

if(cnj3[0] < cnj3[1]){
    for(i=0; i<cnj3.length; i++){
        soma3 = soma3 + cnj3[i];
        produto3 = produto3 * cnj3[i];
        media3 = soma3/3
    }console.log('A soma do terceiro conjunto é ' + soma3 + '\nO produto do terceiro conjunto é ' + produto3 + '\nA média do terceiro conjunto é ' + media3);

}
