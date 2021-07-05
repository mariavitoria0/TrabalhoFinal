/*Ler valor inicial 
 cacular o valor fatorial 
 apresentar resultados*/

 var a = 6;
var r = 6;

console.log('   Calculo fatorial\n')

console.log(a+'! = ')
for(i=5;i>0;i--){
  
    r = r *i;
  console.log(`${a +'x' + i}`,''); 
}  
console.log(r)