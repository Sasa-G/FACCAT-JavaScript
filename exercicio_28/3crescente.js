/*   Ler um valor e escrever se é positivo, negativo ou zero */

let primeiro_valor, segundo_valor, terceiro_valor;

primeiro_valor=parseInt(prompt("Informe o primeiro valor"));
segundo_valor=parseInt(prompt("Informe o segundo valor"));
terceiro_valor=parseInt(prompt("Informe o terceiro valor"));

if (primeiro_valor > segundo_valor) {
  if (primeiro_valor > terceiro_valor) {
     
      alert("Primeiro valor é o maior, valor digitado era:"+ primeiro_valor);

  }
}

if (segundo_valor > primeiro_valor) {
  if (segundo_valor > terceiro_valor) {

      alert("Segundo valor é o maior, valor digitado era:"+ segundo_valor);

  }
}

if (terceiro_valor > primeiro_valor) {
  if (terceiro_valor > segundo_valor) {

      alert("Terceiro valor é o maior, valor digitado era:"+ terceiro_valor);
    
  }
}