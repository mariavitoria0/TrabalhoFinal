//ler valor de pi
//ler valor de raio
//ler valor de altura da caixa de água
//calcular o volume da caixa de água através de uma expressão matemática 
//encontrando a área da base circular: valor de PI multiplicado pelo raio ao quadrado 
//e multiplicando a area da base pela sua altura
//apresentar resultados
var pi = 3.14
var ac = 0;
var r = 4;
var alt = 2;
var v = 0;

console.log('           Calculando o volume de uma caixa de aguá cilíndrica.')

    v = pi*(r**2)*alt
    console.log('\nUma caixa de aguá cilíndrica com raio de '+r+' e altura de '+alt+'m ')
console.log('Possuí um volume de ' + v + 'm³\n')