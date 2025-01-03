
//Willian está iniciando no mundo da programação e recentemente descobriu que existe uma maneira de executar um bloco de comandos repetidamente enquanto uma condição pré-estabelecida não for satisfeita.

// Animado com as possibilidades, ele decidiu treinar a utilização da estrutura while() em um projeto pessoal, de cálculo de médias aritméticas. No entanto, acabou se deparando com um loop infinito, e não conseguiu descobrir o por quê.

// Sabendo que você também está estudando lógica de programação, Willian pediu sua ajuda para localizar onde está o erro em seu código:
let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
}

let media = soma / qtdNumeros;

console.log(media);

// Qual alteração você poderia sugerir a Willian para que o código tenha o resultado esperado?
//Quando utilizamos loops com contadores, precisamos garantir que um dia eles cheguem até a condição de parada do loop. 

// No código acima, o contador não tem seu valor alterado e para resolver o loop infinito basta decrementá-lo a cada iteração, adicionando a linha contador-- dentro do loop.
// while(contador > 0){
//    let numero = parseInt(prompt('Digite o numero:'));
//    soma += numero;
//    contador--;
// }
