//ler valor de dia
//ler valor de mês
//ler quantidade de dias que 1 mês possuí
//calcular a quantidade de dias que faltam para o fim do mês, subtraindo a quantidade de dias que 1 mês possuí por quantidade de dias que se passaram
//calcular quantos dias se passaram desde o começo do ano 
//multiplicando o valor de mês pela quantidade de dias que 1 mês possuí 
//subtraindo o resultado pela quantidade de dias que faltam para o fim do mês
//apresentar resultado

console.log('           Calcular quantos dias se passaram desde o começo do ano \n                    A partir de uma data informada.')

var dia = 24;
var mes = 06;
var qntmes = 30;
var total = 0;
var rest = 0;
    rest = qntmes - dia
    total = (mes * qntmes) - rest
console.log ('\nmês 06 dia 24')
console.log(qntmes + ' - ' + dia + ' = ' + rest)
console.log(mes + ' x ' + qntmes + ' = ' + mes*qntmes)
console.log(mes*qntmes + ' - ' + rest + ' = ' + total + ' dias.')
console.log('\nLogo, se passaram ' + total + ' dias desde o começo do ano.') 
