/*ler valor incial a, ler razão r
imprimir sequência p.a ate 10 valores, sendo p.a, sequencia de valores que a cada novo valor soma-se o valor da razão 
apresentar resultados */
var r = 2;
var a = 3;

console.log('                   Uma sequência de P.A')
console.log(a)
for(i=0;i<=10;i++){
    a = a + r
    console.log(a)
}