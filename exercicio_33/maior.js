/* Ler dois valores e imprimir uma das três mensagens a seguir:
‘Números iguais’, caso os números sejam iguais
‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
‘Segundo maior’, caso o segundo seja maior que o primeiro. */

let primeiro_valor,segundo_valor;

primeiro_valor = parseFloat(prompt("Digite o primeiro Valor:"));
segundo_valor = parseFloat(prompt("Digite o segundo Valor:"));

if (primeiro_valor == segundo_valor){
    alert("Números iguais")
}
else 
if(primeiro_valor > segundo_valor){
    alert("Primeiro é maior")
}
if(segundo_valor> primeiro_valor){
    alert("Segundo maior")
}

