/*ler quantidade de dias sem acidentes
ler quantidade de dias em 1 mês
ler quantidade de meses em 1 ano
converter a quantidade de dias em meses sem acidentes, dividindo os dias sem acidentes pela quantidade de dias em um mês
converter a quantidade de meses sem acidentes em ano, dividindo os meses sem acidentes pela quantidade de meses em um ano 
mostrar o resultado*/
var qntdias = 500
var qntmes = 30
var qntano = 12
var meses_sem = 0;
var ano_sem = 0;
    meses_sem = qntdias / qntmes
    ano_sem = meses_sem / qntano

console.log('       Convertendo os dias sem acidentes em meses e em anos.')

console.log('\n'+qntdias + " dias sem acidentes.")
console.log('Em meses são ' + meses_sem + ' meses')
console.log('Em anos são ' + ano_sem + ' anos.')
