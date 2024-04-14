/* Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). */

let ano_atual;
let ano_nascimento;
let idade;

ano_atual=parseFloat(prompt("Escreva o ano atual"));
ano_nascimento=parseFloat(prompt("Escreva em que ano você nasceu"));

idade=parseFloat(ano_atual - ano_nascimento)

if (idade >= 16){
    alert(`${idade}: Pode votar`);
}
else{
    alert(`${idade}: Não Pode votar`);
}
