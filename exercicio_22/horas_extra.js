/*  A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
(considere que o mês possua 4 semanas exatas).  */



let salario, horas_extras, valor_hora, porcentagem, valor_extra, total_extra, salario_final;

salario=parseFloat(prompt("Digite seu salario"));
horas_extras=parseFloat(prompt("Digite o total de horas extras"))
  
valor_hora=parseFloat(salario/160);
porcentagem=parseFloat(50/100);

if(horas_extras>0){
    valor_extra=parseFloat(valor_hora * porcentagem);
    total_extra=parseFloat(valor_extra + valor_hora);
    salario_final=parseFloat(horas_extras * total_extra + salario);
    alert(` O total de Horas extras: ${horas_extras} \n\ O total do salario é de: R$ ${salario_final}`)
}
else{
    alert(` O total de Horas extras: ${horas_extras} \n\ O total do salario é de: R$ ${salario}`)
}
   