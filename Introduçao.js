var readlineSync = require('readline-sync');
console.log('           Este programa possuí três listas com vários exercícios em cada.');
i=1
var inicio = readlineSync.question('\nDeseja visualizar algum exercicio? digite SIM para visualizar, e NAO para sair.\n ');



while(inicio == 'sim' || inicio == 'SIM' ){
    require('./introduçaoListas');
    delete require.cache[require.resolve(`./introduçaoListas`)]
    inicio = readlineSync.question('Deseja visualizar mais algum exercicio? Digite SIM para visualizar, e NAO para sair. \n');
}