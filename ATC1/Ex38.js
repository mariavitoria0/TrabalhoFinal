/*ler o ano de nascimento informado
ler o ano atual informado 
calcular a idade em anos, subtraindo o ano atual pelo ano de nascimento
calcular a idade em meses, multiplicando a idade em anos pela quantidade de meses que 1 ano possuí(12)
calcular a idade em dias, multiplicando a idade em meses pela quantidade de dias que 1 mês possuí, nesse caso, foi considerado 30 dias 
calcular a idade em semanas, multiplicando a idade em meses pela quantidade de semanas que 1 mês possuí, considerado 4 semanas 
apresentar resultados*/
var nas = 0;
var atual = 0;
var idano = 0;
var idmes = 0;
var iddia = 0;
var idsem = 0;
var readline = require('readline-sync');

console.log('               Calculando a idade da pessoa em anos, em meses, em dias e em semanas.');

    nas = parseInt(readline.question('\nQual seu ano de nascimento?\n '));
    atual = parseInt(readline.question('Em que ano voce esta?\n'));
    idano = atual - nas
console.log('Você possuí ' + idano + ' anos de idade\n');
    idmes = idano * 12
console.log('Você possuí ' + idmes + ' meses de idade\n');
    iddia = idmes * 30
console.log('Você possuí ' + iddia + ' dias de idade e\n');
    idsem = idmes * 4
console.log('Você possuí ' + idsem + ' Semanas de idade\n');
