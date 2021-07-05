//ler valor do cateto 1
//ler valor do cateto 2
//calcular a hipotenusa pela equação matemática, a soma dos catetos ao quadrado e encontrar sua raiz
//apresentar resultados 
var cat1 = 6;
var cat2 = 4;
var hip = 0;

console.log('           Calculando o valor da hipotenusa.\n');
console.log('Cateto 1 igual a '+cat1+'  Cateto 2 igual a '+cat2);
    hip = Math.sqrt(cat1**2 + cat2**2);
console.log('O valor da hipotenusa é ' + hip);