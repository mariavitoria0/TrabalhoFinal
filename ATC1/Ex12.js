/*Ler salário integral 
aumentar o salário em 15%
descostar 8% depois do aumento
Apresentar resultados
*/
var intsal = 1500;
var qntaum = 0;
var aumsal = 0;
var qntdes = 0;
var final = 0;
    qntaum=intsal*0.15
    aumsal = intsal + qntaum
    qntdesc = aumsal*0.08
    final = aumsal-qntdesc

console.log('       Informar o salário de um funcionário com 15% de desconto e \n            depois informar o salário com 8% de desconto.')

console.log("\nO funcionário recebe um salário inicial no valor de R$" + intsal)
console.log("Depois de um aumento de 15% o salário passou a ser no valor de R$" + aumsal)
console.log('\nE com os descontos o salário final ficou no valor de R$' + final)