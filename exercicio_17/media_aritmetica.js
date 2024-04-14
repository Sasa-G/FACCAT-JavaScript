/* Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
aluno é aprovado). Escrever também a média calculada.   */

let nota1;
let nota2;
let media;

nota1=parseFloat(prompt("Escreva a primeira nota"));
nota2=parseFloat(prompt("Escreva a segunda nota"));

media=parseFloat((nota1+nota2)/2)

if (media >= 6){
    alert(`Aluno aprovado com a media ${media}`);
}
else{
    alert(`Aluno reprovado com a media ${media}`);
}
