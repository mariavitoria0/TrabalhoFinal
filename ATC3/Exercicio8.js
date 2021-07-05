/*ler valor de massa inicial 
calcular o valor da massa final, sendo que a cada 50s a massa perde metade, assim, divindino a massa por 2 cada 50s
somar o tempo necessario para massa ficar menor que 0.5g, transformando em horas, dividindo os segundos por 3600
e trasnformar em minutos, multiplicando os segundos por 60 
apresentar resultados*/
var mi = 0;
var mf = 0;
var h = 0;
var min = 0;
var s = 0;
var readlineSync = require('readline-sync')
var i = 50;
console.log('           Calcular o tempo necessário até que a massa se torne menor que 0,5.')
mi = parseFloat(readlineSync.question('\nQual a masssa inicial? \n'))

mf = mi + mf
while(mf>=0.5){
    mf = mf/2
    s = s +i
    i = i+50
}

h = s/3600
min = s/60

console.log('A massa inicial é ' + mi + '\nA massa final é ' + mf)
console.log('o tempo necesseário foi de ' + h + ' horas, ' + min + ' minutos e ' + s +' segundos')