/*   Ler um valor e escrever se é positivo, negativo ou zero */

let numero;

numero=parseFloat(prompt("Escreva um numero"));

if(numero>0){
   alert("O numero é positivo")
}
else if(numero<0){
   alert("O valor é negativo")
}
else{
   alert("o valor é igual a zero")
}