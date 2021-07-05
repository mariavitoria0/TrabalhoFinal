var n1 = 0;
/* ler o primeiro numero informado pelo usuário 
ler o segundo número informado pelo usuário
ler o terceiro número informado pelo usuário 
verificar qual dos 3 números é o menor 
apresentar resultados*/
var n2 = 0;
var n3 = 0;
var readline = require('readline-sync');

console.log('           Informar qual o menor número.')

    n1 = parseFloat(readline.question('\nQual o primeiro numero?\n'));
    n2 = parseFloat(readline.question('Qual o segundo numero?\n'));
    n3 = parseFloat(readline.question('Qual o terceiro numero?\n'));
if(n1<n2 && n1<n3) {
    console.log(n1 + ' é o menor número')
} else if (n2<n3) { 
    console.log(n2 + ' é o menor número')
}
else {
    console.log(n3 + ' é o menor número')
}
