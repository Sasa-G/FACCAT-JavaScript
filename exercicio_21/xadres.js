/*  Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. */

let hora_inicio;
let hora_fim;
let duracao;


hora_inicio=parseFloat(prompt("Escreva o horario de inicio do jogo de xadres sem incluir os minutos"));
hora_fim=parseFloat(prompt("Escreva o horario de fim do jogo de xadres sem incluir os minutos"));

if (hora_fim >= hora_inicio){
    duracao = hora_fim - hora_inicio}

else{
    duracao = 24 - hora_inicio + hora_fim
}

if (duracao > 24){
    duracao = 24  
}

alert(`A duração do jogo é de ${duracao} horas`)