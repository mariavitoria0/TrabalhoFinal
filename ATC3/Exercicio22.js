/*identificar os números ímpares existentes entre 100 e 200
apresentar resultados
 */
var i = 100;
var n =0;



console.log('\n           Os números entre 100 e 200 que são ímpares são os números: \n ')
while(i<=200){
    if( i%2!=0){
        n = i
       console.log(n)
    }
  i++
}