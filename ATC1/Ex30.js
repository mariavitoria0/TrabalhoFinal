/*ler o valor do salário fixo
ler o valor de vendas feita
calcular o valor da comissão de 4%, multiplicando o valor do salário por 0,04
calcular o valor do salário final, somando o salário fixo mais a comissão
apresentar resultado*/
var salario = 1200;
var vendas = 5000;
var com = 0;
var salfinal = 0;

console.log('               Calculando o valor da comissão de um funcionário que recebe 4% de comissão e o salário final.')
console.log('\n Um funcionário que fez R$'+vendas+' de vendas e seu salário fixo é no valor de R$'+salario)
    com = 5000 * 0.04
    salfinal = salario + com
console.log('\nA comissão de vendas foi de R$' + com)
console.log('Sendo assim, o salário final ficou no valor de R$' + salfinal)
