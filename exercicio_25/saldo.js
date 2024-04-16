/*  Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.  */


let conta, saldo, debito, credito, saldo_atual;

conta=parseInt(prompt("Digite o numero da sua conta"));
saldo=parseFloat(prompt("Digite o seu saldo"));
debito=parseFloat(prompt("Digite o seu debito"));
credito=parseFloat(prompt("Digite o seu credito"));

saldo_atual=parseFloat( saldo - debito + credito)

if( saldo_atual < 0){
alert("Saldo Negativo de: R$" + saldo_atual)}
else{
alert("Saldo Positivo de: R$" + saldo_atual)}
