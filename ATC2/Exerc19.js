//ler valor total informado pelo usuário
//ler valor de prestações informado pelo usuário
//calcular o valor de cada prestação
//apresentar resultados
var total = 0;
var prest = 0;
var cada = 0;
var readlineSync = require('readline-sync');

console.log('           Calculando o valor de cada prestação.')

total = parseInt(readlineSync.question('\nQual o valor total da conta?\n'));
prest = parseInt(readlineSync.question('Quantas prestacoes sao?\n'));

if(prest<12){
    console.log('O mínimo de prestações é 12')
    prest = parseInt(readlineSync.question('Quantas prestacoes sao?'))
    if(prest >=24 ){
        cada = ((total*0.10) + total)/prest
        console.log('Cada prestação ficou no valor de R$' + cada);
    }else if(prest>=36){
        cada =((total*0.15) + total)/prest
        console.log('Cada prestação ficou no valor de R$' + cada);
    }
}if(prest >=24 ){
    cada = ((total*0.10) + total)/prest
    console.log('Cada prestação ficou no valor de R$' + cada);
}else if(prest>=36){
    cada =((total*0.15) + total)/prest
    console.log('Cada prestação ficou no valor de R$' + cada);
}
else{
    cada = total/prest
    console.log('Cada prestação ficou no valor de R$' + cada);
}