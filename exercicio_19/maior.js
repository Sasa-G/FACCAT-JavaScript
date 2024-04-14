/* Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.  */

let valor1;
let valor2;


valor1=parseFloat(prompt("Escreva um numero"));
valor2=parseFloat(prompt("Escreva outro numero diferente do primeiro"));

if (valor1 > valor2){
    alert(valor1);
}
else if (valor2 == valor1) {
    alert("Não digite valor igauis");
}
else{
    alert(valor2);
}
