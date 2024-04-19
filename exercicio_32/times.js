/* Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE */


let time1, time2;
let gols_time1, gols_time2;

time1=prompt("Digite o nome do time 1");
time2=prompt("Digite o nome dotime 2");
gols_time1=parseInt(prompt("Digite o numero de gols do time 1"));
gols_time2=parseInt(prompt("Digite o numero de gols do time 2"));

if (gols_time1 > gols_time2){
    alert(`O time vencedor é ${time1} com ${gols_time1} gols`)
}
else
if (gols_time2 > gols_time1){
    alert(`O time vencedr é ${time2} com ${gols_time2} gols`)
}
else{
    alert(`ÈMPATE`)
}