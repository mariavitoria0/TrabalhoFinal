/*ler array numeros
encontrar o maior utilizando a função 'math.max'
encontrar o menor utilizando a função 'math.min'
utilizar o laço de repetiçaõ for para imprimir os numeros
apresentar resultados  */
console.log('               Encontrar o maior e o menor número.')

var numeros = [1,5,2,6,7,32,85,41,78,65,69,52,7,8,4];
var max= Math.max.apply(Math, numeros)
var min = Math.min.apply(Math, numeros)

console.log('entre os numeros: ')

for(i=0; i<16; i++){
    console.log( numeros[i])
}

console.log('o numero maximo é ' + max)
console.log('o numero mínimo é o ' + min)

