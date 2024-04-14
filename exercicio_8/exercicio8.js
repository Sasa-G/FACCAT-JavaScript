/*Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
de eleitores. */

var eleitores, nulos, brancos, validos, percentual_nulos, percentual_brancos, percentual_validos ;

alert("Vamos ler o numero total de eleitores, e a porcentagem de votos nulos, bracnos e validos")

var eleitores=parseInt(prompt("Digiter o total de eleitores"));
var nulos=parseInt(prompt("Digite o total de votos nulos"));
var brancos=parseInt(prompt("Digite o total de votos brancos"));
var validos=parseInt(prompt("Digite o total de votos validos"));

percentual_nulos= (nulos / eleitores) * 100
percentual_brancos= (brancos / eleitores) * 100
percentual_validos= (validos / eleitores) * 100

alert("O total de votos é de: " + eleitores)
alert("O percentural de votos nulos é de: " + percentual_nulos + "%")
alert("O percentural de votos brancos é de: " + percentual_brancos + "%")
alert("O percentural de votos validos é de: " + percentual_validos + "%")