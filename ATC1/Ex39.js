/*ler o valor do salário 
ler o valor da conta 1
ler o valor da conta 2
calcular qual vai ser o valor da conta 1, com os 2% de multa de atraso, multiplicando 0,02 para saber o valor da multa e somando com o valor da conta para saber o valor final 
fazer o mesmo com a conta 2
calcular quanto sobrou do salario após o pagamento das duas contas, subtraindo o salario pela conta 1 e pela conta 2
apresentar resultado*/
var sal = 1200
var c1 = 200
var c2 = 120
var pgc1 = 0;
var pgc2 = 0;
var rest = 0;

console.log('           Calculando quanto restará do salário do João após pagar duas contas atrasadas e com multas.');
console.log('\nA primeira conta é no valor de R$'+c1+'\nA segunda conta é no valor de '+c2);
    pgc1 = (c1*0.02) + c1 
    pgc2 = (c2*0.02) + c2 
    rest = sal - pgc1 - pgc2
console.log('\nApós o pagamento das duas contas atrasadas, restam do salário de João R$' + rest)
