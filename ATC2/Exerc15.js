//ler dados básicos de alunos informados pelo usuário 
//apresentar resultados
var matr = 0;
var nom = 0;
var gen = 0;
var curso = 0;
var rend = 0;
var readlineSync = require('readline-sync');

console.log('           Informe os dados para cadastro.')

matr = parseInt(readlineSync.question('\nInforme os 5 digitos da sua matricula: \n'));
nom = readlineSync.question('Informe seu nome completo:\n ');
gen = readlineSync.question('Informe se seu genero e M ou F: \n');
curso = readlineSync.question('Qual o seu curso, BSI, EE, EM, EC ou AQ?\n');
rend = parseInt(readlineSync.question('Qual o seu coeficiente de rendimento?\n'))

if(gen == 'M' || gen=='m'){
    gen = 'Masculino'
}else if(gen == 'F' || gen == 'f'){
    gen = 'Feminino'
}
if(curso == 'BSI' || curso == 'bsi'){
    curso = 'Bacharelado em Sistemas de Informação'
}else if(curso =='EE' || curso == 'ee'){
    curso = 'Engenharia Elétrica'
}else if(curso == 'EM' || curso == 'em'){
    curso ='Engenharia Mecânica'
}else if(curso == 'EC' || curso == 'ec'){
    curso = 'Engenharia Civil'
}else if(curso =='AQ' || curso == 'aq'){
    curso = 'Arquitetura'
}
if(rend == 9 || rend==10 ){
    rend = 'Excelente'
}else if(rend==7 || rend==8){
    rend = 'Bom'
}else if(rend==6 ||rend==5){
    rend = 'Regular'
}else if(rend==3 || rend==4){
    rend = 'Necessita Melhoras'
}else if(rend==0 || rend==1 || rend==2){
    rend = 'Preocupante'
}
console.log('Sua matrícula é ' + matr + '\nNome completo: ' + nom + '\nGenêro ' + gen + '\nCurso: ' + curso + '\nCoeficiente de rendimento: ' + rend)
