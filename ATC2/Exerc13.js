//ler números informados pelo usuário 
//organizar os números em ordem crescente
//apresentar resultados
var n1 = 0;
var n2 = 0;
var n3 = 0;
var p1 = 0;
var p2 = 0;
var p3 = 0;
var cresc = 0;
var readlineSync = require('readline-sync');

console.log('           Ordenar os números em ordem crescente.');

    n1 = parseInt(readlineSync.question('\nQual o primeiro numero?\n'))
    n2 = parseInt(readlineSync.question('Qual o segundo numero?\n'));
    n3 = parseFloat(readlineSync.question('Qual o terceiro numero?\n'));

 if(n1<n2 && n1<n3){
    p1 = n1
 }else if(n2<n3 && n2<n3){
    p1 = n2
 }else if(n3<n2 && n3<n2){
    p1 = n3
 }
 if((n2<n3 && n2>n1) || (n2>n3 && n2<n1)){
    p2 = n2
 }else if(n1<n2 && n1>n3 || n1>n2 && n1<n3){
    p2=n1
 }else if(n3<n2 && n3>n1 || n3>n2 && n3<n1){
    p2=n3
 }
 if(n1>n2 && n1>n3){
    p3=n1
 }else if(n2>n1 && n2>n3){
    p3 = n2
 }else if(n3>n1 && n3>n2){
    p3 = n3
 }
 console.log(p1 + ', ' + p2 + ', ' + p3 )