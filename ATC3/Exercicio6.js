var n=0;
var rest=0;
var div =0
var i = 1;
var readlineSync = require('readline-sync');

console.log('               Verificar se o número é perfeito.')

n = parseInt(readlineSync.question('\nQual numero deseja verificar se e perfeito? \n'))

while(i<n){
       
    if(n%i == 0 ){
        div = div + i
    }
    i++  
   
} if(div==n){
         console.log(n + ' é perfeito ')
    }if(div != n){
         console.log(n + ' nao é perfeito')
    } 
