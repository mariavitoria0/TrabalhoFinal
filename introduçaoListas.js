var lista = require('./Lista1');
var lista2 = require('./Lista2');
var lista3 = require('./Lista3');
var readlineSync = require('readline-sync');



var x = parseInt(readlineSync.question('\nQual das 3 listas deseja abrir? '));
    switch (x){
        case 1: 
            console.log('\nA lista 1 apresenta 40 exercícios. ');
            y = parseInt(readlineSync.question('Qual deles vai querer visualizar? \n'));
                if(y>0 && y<=40){
                    lista(y);
                }else if(y>40){
                    console.log('Exercício não encontrado. Tente novamente.');
                }
            break;
        case 2: 
            console.log('\nA lista 2 apresenta 25 exercícios. ');
            y = parseInt(readlineSync.question('Qual deles vai querer visualizar?'));
                if(y>0 && y<=25){
                  lista2(y)
                }else if(y>25){
                    console.log('Exercício não encontrado. Tente novamente.')
                }
            break;
        case 3: 
            console.log('\nA lista 3 apresenta 26 exercícios. ');
            y = parseInt(readlineSync.question('Qual deles vai querer visualizar?'));
                if(y>0 && y<=26){
                    lista3(y)
                }else if(y>26){
                    console.log('Exercício não encontrado. Tente novamente.')
                }
           break;
    } if(x>3 || x==0){
        console.log('Lista não encontrada. Tente novamente.')
    }





/*
if(y>0 && y<=40){
    lista(y)
}
*/