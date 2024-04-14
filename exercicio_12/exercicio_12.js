/*Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor
correspondente em graus Celsius */

alert("Vamos conerter um temperatura de Fahrenheit para Celsius")

var valor_F , valor_C;

valor_F=parseFloat(prompt("Digite o valor da temperatura em Fahrenheit "));

valor_C=parseFloat(5/9 * (valor_F - 32));
alert(valor_F + "ºF é igual a: "+ valor_C + "ºC")