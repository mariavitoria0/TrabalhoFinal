var readlineSync = require('readline-sync');
n = 0
var div = 0;
console.log('               Verificar se o número é primo ou não.')
n = parseInt(readlineSync.question('\nInforme o numero para saber se ele e primo ou nao:\n'));

for(i=1;i<=n;i++){
   if(n%i == 0){
       div =div +1
   }
}
if(div>2 || n==1){
    console.log(n+' não é um número primo.')
}
else{
    console.log(n+ ' é um número primo.')   
}