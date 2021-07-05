/*Ler valor total da conta
dividir por 3 para saber quanto cada um vai pagar, forçando o numero inteiro
retornar ao resto da divisão e somar com a divisão feita para fabio 
apresentar resultados
*/

var cnttl = 101.53
var cntc = 0;
var cnta = 0;
var cntf = 0;
var rac = 0;
var resto = 0;

console.log('                   Ler o valor total da conta e dividir a conta para os três, porém, apenas 1 pague centavos.')

    resto = cnttl%3
    cntc = parseInt(cnttl/3)
    cnta = parseInt(cnttl/3)
    cntf = parseInt(cnttl/3)+resto

    console.log('\nO valor da conta é de R$'+cnttl)

    console.log('o valor que Carlos vai pagar é de R$ ' + cntc)
    console.log('\no valor que André vai pagar é de R$ ' + cnta)
    console.log('\no valor que Fabio vai pagar é de R$ ' + cntf+'\n')
    