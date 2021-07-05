/*ler valor do pagamento por hora normal 
ler valor do pagamento por hora extra
ler quantidade de horas normais e horas extras trabalhadas no mês
ler o valor de desconto 
calcular o salário bruto, multiplicando preço da hora normal por quantidade de horas trabalhadas no mês
e preço da hora extra por quantidade de horas extras trabalhadas no mês
somar os resultados das multiplicações
calcular o salário liquido, subtraindo o salário bruto pelo valor que irá ser descontado
apresentar resultados */
var pagh = 10
var pagex = 15
var hnormal = 176;
var hextr = 20;
var imps = 0.10;
var liq = 0;
var brt = 0;

console.log('               Calcula o salário bruto e o salário líquido.')

    brt = (hnormal*pagh) + (hextr*pagex)
    liq = brt - (brt*imps)
    console.log('\nO salário bruto é de R$' + brt)
    console.log('O salário liquido é de R$' + liq)