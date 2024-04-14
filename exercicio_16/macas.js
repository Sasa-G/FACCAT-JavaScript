/* As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
escreva o custo total da compra.  */

let macas;
let soma;

macas=parseFloat(prompt("Escreva a quantidade de maças compradas"));

if (macas < 12){
    soma=parseFloat(macas * 1.30)
    alert(`foram compradas: ${macas} maças, então o valor é ${soma}`)
}
else{
    soma=parseFloat(macas * 1)
    alert(`foram compradas: ${macas} maças, então 0 valor é ${soma}`)
}