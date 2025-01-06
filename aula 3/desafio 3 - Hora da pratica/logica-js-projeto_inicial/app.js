//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;
while (contador >= 0) {
    console.log(contador);
    contador++
}
//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
numero = prompt('Digite um positivo ou negativo');
if (numero > 0) {
    alert('Número positivo!');
} else {
    alert('Número negativo!');
}
//Crie um sistema de pontuação para um jogo. 
// Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!" no console do navegador. 
// Caso contrário, mostre "Tente novamente para ganhar.".
pontuacao = 105;
if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}
//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoConta = 500; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);
//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}`);