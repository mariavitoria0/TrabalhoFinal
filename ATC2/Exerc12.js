//ler respostas sendo "verdadeiro" ou "falso"
//descobrir qual a animal é 
//apresentar resultados
var readlineSync = require('readline-sync');

console.log('                              Descobrir qual animal está pensando.')

console.log('\nPense em um desses animais: pato, águia, galinha, avestruz, pinguim, morcego, onitorrinco, leão, gato, onça pintada, baleia, tubarão, lambari, enguia ou arraia. \nE responda com verdadeiro ou falso.')
 var p1 = 0; var p11=0;
 var p2 = 0; var p12=0;
 var p3 = 0; var p13=0;
 var p4 = 0; var p14=0;
 var p5 = 0; var p15=0;
 var p6 = 0; var p16=0;
 var p7 = 0; var p17=0;
 var p8 = 0; var p19=0;
 var p9 = 0; var p18=0;
 var p10 = 0; var p20 = 0;
 p1 = readlineSync.question('\nO animal que voce esta pensando e uma ave?\n');
if(p1 == 'verdadeiro'){
    p2 = readlineSync.question('Essa ave,voa?\n'); if(p2 == 'verdadeiro'){
            p3 = readlineSync.question('Possui pes com membranas natatorias?\n'); if(p3 == 'verdadeiro'){
                console.log('Você está pensando em um pato.')
            }else if(p1 == 'verdadeiro' && p2 == 'verdadeiro' && p3 == 'falso'){
                p4 = readlineSync.question('É conhecido por uma execelente visao?\n'); if(p4 == 'verdadeiro')
                console.log('Você esta pensando em uma águia.')
            }
        }
    }if(p1 =='verdadeiro' && p2 == 'falso'){
        p5 = readlineSync.question('apresenta uma crista vermelha?\n'); if( p5 == 'verdadeiro'){
            console.log('Você esta pensando em uma galinha'); 
        }
    }if (p5 =='falso'){
        p6 = readlineSync.question('Possui pescoço e pernas longas?\n'); if (p6 == 'verdadeiro'){
            console.log('Você esta pensando em um avestruz.')
        }
    }if(p6 == 'falso'){
        p7 = readlineSync.question('vive na Antartida?\n'); if(p7 == 'verdadeiro'){
            console.log('Você está pensando no pinguim')
        }
    }
if(p1 == 'falso'){
    p8 = readlineSync.question('O animal que voce esta pensando e um mamifero?\n'); if(p8 == 'verdadeiro'){
        p9 = readlineSync.question('Ele e um felino?\n'); if(p9=='verdadeiro'){
            p10 = readlineSync.question('Ele possui uma grande juba?\n'); if(p10=='verdadeiro'){
                console.log('Você está pensando em um leão.');
                
            }if(p10=='falso'){
                p11 = readlineSync.question('produz um ruido chamado ronrom?\n'); if(p11=='verdadeiro'){
                    console.log('Você está pensando em um gato.')
                }
            }if(p11=='falso'){
                p12=readlineSync.question('possui cor amarelo-dourado com manchas pretas?\n');if (p12=='verdadeiro'){
                    console.log('Você está pensando em uma onça')
                }
            }
        }else if(p9=='falso'){
            p13=readlineSync.question('Ele e um mamifero que voa?\n');if(p13=='verdadeiro'){
                console.log('Você está pensando em um morcego')
            }
        }if(p13=='falso'){
            p14=readlineSync.question('Ele possui um bico grande?\n');if(p14=='verdadeiro'){
                console.log('Você está pensando em um onitorrinco.')
            }
        }if(p14=='falso'){
            p15 = readlineSync.question('e um grande animal marinho?\n');if(p15=='verdadeiro'){
                console.log('Você esta pensando em uma Baleia.')
            }
        }
    }
}if(p1=='falso' && p8 == 'falso'){
    p16=readlineSync.question('O animal que voce esta pensando e um peixe?\n');if(p16=='verdadeiro'){
        p17=readlineSync.question('Possui um porte pequeno, nao passando de 20cm?\n');if(p17=='verdadeiro'){
            console.log('Você está pensando em um Lambari.')
        }
    }if(p17=='falso'){
        p18=readlineSync.question('possui um corpo alongado?\n');if(p18=='verdadeiro'){
            console.log('Você está pensando em uma enguia.')
        }
    }if(p18=='falso'){
        p19=readlineSync.question('possui um corpo achatado, como um disco?\n');if(p19=='verdadeiro'){
            console.log('Você está pensando em uma arraia.')
        }
    }if(p19=='falso'){
        p20=readlineSync.question('ocupas os niveis superiores da cadeia alimentar do ambiente marinho?\n');if(p20=='verdadeiro'){
            console.log('Você está pensando em um tubarâo.')
        }
    }
}

    

