/*ler valor inicial a, e ler valor de razão r
apresentar uma p.g até 10 valores, sendo p.g, uma sequência de valores que para o valor seguinte deve-se multiplicar o valor da razão
apresentar resultados */
var a = 2;
var r = 2;

console.log('      Uma sequência de P.G\n')
console.log(a)

for(i=0;i<=10;i++){
    a = a*r
    console.log(a)
}