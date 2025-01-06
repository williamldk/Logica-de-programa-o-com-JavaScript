console.log('Boas vindas');
let nome = 'william';
console.log(`Olá, ${nome}!`);
alert(`Olá ${nome}!`);

let linguagemPreferida = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagemPreferida);

let valor1 = 42;
let valor2 = 8;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)

valor1 = 10; // Reatribuição (sem usar `let`, pois já foi declarado antes)
valor2 = 8;
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

let idade = prompt('Qual a sua idade?');
idade = parseInt(idade);
if (idade >= 18) {
    console.log('Acesso permitido, você é maior de idade!');
}else {
    console.log('Acesso negado');
}

// Declarar uma única vez a variável "numero"
let numero = parseFloat(prompt("Digite um número:"));
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// Loop usando uma nova variável para evitar conflitos
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

let nota = 8; // Substitua pelo valor da nota que deseja testar
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(`Número inteiro aleatório entre 1 e 10: ${numeroInteiroAleatorio}`);

numeroInteiroAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(`Número inteiro aleatório entre 1 e 1000: ${numeroInteiroAleatorio}`);