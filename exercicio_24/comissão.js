/*  Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
ultrapassar este valor, calcular e escrever o seu salário total. */


 let  salario, vendas, comissao, comissao2, total1, total2,vendas2, comissao3 ;
 salario=parseFloat(prompt("Escreva seu salario"));
 vendas=parseFloat(prompt("Escreva o valor total das suas vendas"));

   if (vendas < 1500){
      comissao=parseFloat( (vendas / 100) * 3)
      total1 =parseFloat( salario + comissao)
      alert("o total da comissão foi de R$" + comissao )
      alert("O salario total foi de R$:"+ total1)
   }
   else{
         comissao3 =parseFloat ((vendas / 100) * 3)
         vendas2 =parseFloat (vendas + comissao3)
         comissao2 =parseFloat ((vendas2 /100) * 5)
         total2 =parseFloat (salario + comissao2)
         alert("o total da comissão foi de R$" + comissao2 )
         alert("O salario total foi de R$:"+ total2)}