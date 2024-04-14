/*Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor. */

var salário_fixo, comissão_carros, porcentagem_comissão, porcentagem, quant_carros, valor_vendas, salario_novo;

alert("Vamos calcular o valor total do funcionario")

salário_fixo=parseFloat(prompt("Digite o salário fixo"));
comissão_carros=parseFloat(prompt("Digite o valor da comissão"));
quant_carros=parseFloat(prompt("Digite a quantidade de carros pagos"))
valor_vendas=parseFloat(prompt("Digite o valor todas das suas vendas"))

porcentagem_vendas=parseFloat(valor_vendas * 5 / 100)
porcentagem_comissão=parseFloat(comissão/100)
porcentagem_carros= parseFloat(quant_carros * porcentagem_comissão)

salario_novo=parseFloat(salário_fixo + porcentagem_vendas + porcentagem_carros)

alert(salario_novo)

