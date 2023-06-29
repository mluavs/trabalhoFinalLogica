prompt = require('prompt'); // to trazendo a biblioteca npm pra que seja possível fazer as operações no console.

// aqui eu to criando um objeto pra deixar a coisa toda mais organizada, assim, eu posso atribuir os preços aos códigos

const valores = {
  100: 1.20,
  101: 1.30,
  102: 1.50,
  103: 1.20,
  104: 1.30,
  105: 1.00,
};

function calculateTotal() {
//primeiro prompt pergunta do código. esse 'prompt.get' é da sintaxe da biblioteca e tá recebendo o número que a pessoa digitar, depois tem o que a gente chama de callback function, que ta analisando esse número e atribuindo ele como result ou erro no caso de não estar no intervalo determinado.
  prompt.get(['number'], function (err, result) {
    const number = parseInt(result.number);

// essa precisa ser a primeira condição, porque se ela estiver lá no final, o 999 entra na condição de número inválido e nunca termina!!!
    if (number === 999) {
        console.log('Cálculo total: ' + total.toFixed(2));
        return;
      }

// essa condição verifica se o usuário está digitando um número entre 100 e 105, se ele digitar algo diferente aparece uma mensagem de erro. e a função reinicia com o primeiro prompt que pede novamente o código
    if (number < 100 || number > 105) {
      console.log('Erro: número inválido! Digite um número entre 100 e 105');
      calculateTotal();
      return;
    }
 // essa condição impede a passação de pano pra um usuário que digitar letra. o algortimo reconhece que os caracteres digitados não são um número e pede ao usuário que digite um número.
    if (isNaN(number)) {
        console.log('Isso não é um número. Por favor digite um número entre 100 e 105');
        calculateTotal();
        return;
      }

// o segundo prompt pede a quantidade relativa ao código do pedido.
      prompt.get(['quantity'], function (err, result) {
// variável de quantidade, que tá recebendo o número que o usuário digitar
      const quantity = parseInt(result.quantity);

      const valor = valores[number];
      const subtotal = valor * quantity;
      console.log(`Código do pedido: ${number}, quantidade pedida: ${quantity}, subtotal: ${subtotal.toFixed(2)}`);
      total += subtotal;
      calculateTotal();
    });
  });

}

let total = 0;
console.log('Digite 999 para finalizar o cálculo.');

prompt.start();
calculateTotal();
