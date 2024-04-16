/*  Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
compra' */

let estoque_atual, estoque_maximo, estoque_minimo, media;

estoque_atual=parseInt(prompt("Escreva o estoque atual"));
estoque_maximo=parseInt(prompt("Escreva o estoque maximo"));
estoque_minimo=parseInt(prompt("Escreva o estoque menimo"));


   media=parseFloat( (estoque_maximo + estoque_minimo)/2)

  if (estoque_atual >= media){
      alert("Não efetuar compra")}
   else{
      alert("efetuar compra")}