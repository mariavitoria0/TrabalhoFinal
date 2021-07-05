/*ler valor de x1
ler valor de y1 
ler valor de x2 
ler valor de y2 
subtrair valor de x2 pelo valor de x1 
subtarir valor de y2 pelo valor de y1
elevar ao quadrado cada resultado das subtrações
somar resultado das potenciação 
retorna a raiz quadrada do resultado da soma 
mostrar resultado
*/
var x1 = 3
var y1 = 1
var x2 = 3
var y2 = -3
var disnt = 0;

console.log('         Calculando a distância de dois pontos do plano cartesiano.')

disnt = (x2-x1)**2 + (y2-y1)**2
Math.sqrt(disnt)
    console.log("\nDado as coordenadas (" + x1 + "," + y1 + ") e (" + x2 + "," + y2 + "), a distância entre os dois pontos é " + Math.sqrt(disnt))
