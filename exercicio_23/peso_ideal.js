/* Para o enunciado a seguir foi elaborado um algoritmo em Português Estruturado que contém
erros, identifique os erros no algoritmo apresentado abaixo:
Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
e mostre seu peso ideal, utilizando as seguintes fórmulas:
 - para sexo masculino: peso ideal = (72.7 * altura) - 58
 - para sexo feminino: peso ideal = (62.1 * altura) - 44.7  */



let nome, altura, sexo;

nome=prompt("Escreva Seu Nome");
altura=parseFloat(prompt("Escreva Sua Altura"));
sexo=prompt("Escreva seu Sexo: M para maculino e F para feminino");

masculino=parseFloat((72.7 * altura)-58);
femino=parseFloat((62.1 * altura)-44.7);

if (sexo=="F"){
    alert(`Olá, ${nome}. Seu peso ideal é: ${femino}`);
}
else if(sexo=="M"){
    alert(`Olá, ${nome}. Seu peso ideal é: ${masculino}`);
}
else{
    alert("Sexo invalido")
}


