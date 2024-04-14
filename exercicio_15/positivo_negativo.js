/* Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo) */

let valor;

valor=parseFloat(prompt("Escreva um numero"));

if (valor > -1){
    alert(`${valor} É POSITIVO`)
}
else{
    alert(`${valor} É NEGATIVO`)
}