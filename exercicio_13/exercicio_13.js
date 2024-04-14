/*) Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
final é: */

alert("Vamos realizar a media final de um aluno, ultilizando a media ponderada")

var nota1, nota2, nota3, media;

nota1=parseFloat(prompt("Digite o valor da primeira nota"));
nota2=parseFloat(prompt("Digite o valor da segunda nota"));
nota3=parseFloat(prompt("Digite o valor da terceira nota"));

media=parseFloat(nota1 * 2 + nota2 * 3 + nota3 * 5) / 10

alert("A media final do aluno é de: " + media)