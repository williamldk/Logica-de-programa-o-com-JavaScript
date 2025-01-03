//Saber trabalhar com loops de repetição, como o while, é essencial na programação! Os loops permitem automatizar tarefas repetitivas e lidar com grandes quantidades de dados de forma eficiente.

//Contudo, é importante usá-los com cuidado para evitar loops infinitos (quando a condição nunca se torna falsa - o que pode travar o programa).

//É recomendado sempre ter uma lógica que faça com que a condição eventualmente se torne falsa para que o loop termine corretamente.

//Abaixo, temos um código de exemplo:

let contador = 1;

while (contador < 4) {
  console.log('Executando a iteração ' + contador);
  contador = contador + 1;
}

// Ao executar código, podemos afirmar que:

// while (contador < 4){ } começa o loop while. Ele continuará repetindo o bloco de código entre as chaves { } enquanto a condição contador < 4 for verdadeira.

//Isso aí! Essa condição significa que o loop continuará enquanto o valor da variável contador for menor que 4.

//O resultado final será a impressão das mensagens "Executando a iteração 1", "Executando a iteração 2" e "Executando a iteração 3" no console.

//Isso aí! O loop foi executado três vezes, e o valor final da variável contador é 4. Na quarta iteração, o valor de contador é 4. 
// Neste momento, a condição contador < 4 se torna falsa, pois 4 não é menor que 4. O loop não executa mais o código dentro das chaves e termina.