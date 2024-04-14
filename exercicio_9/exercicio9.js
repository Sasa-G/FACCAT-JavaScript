/*Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
Calcular e escrever o valor do novo salário. */

var salario_atual, reajuste, novo_salario, porcentagem;

alert("Vamos calcular o reajuste do seu salário");

salario_atual=parseFloat(prompt("Digite seu salario atual"));
reajuste=parseFloat(prompt("Digite o percentual do reajuste salarial"))
porcentagem =parseFloat(reajuste/100)
novo_salario=parseFloat(salario_atual*porcentagem + salario_atual)

alert("Seu novo salário sera de:" + novo_salario);