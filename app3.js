const prompt = require('prompt');

function Lanche(lanche, codigo, valor) {
  this.lanche = lanche;
  this.codigo = codigo;
  this.valor = valor.toFixed(2);
}

let cachorroQuente = new Lanche("cachorro-quente", 100, 1.20);
let bauruSimples = new Lanche("Bauru Simples", 101, 1.30);
let bauruComOvo = new Lanche("Bauru com Ovo", 102, 1.50);
let hamburguer = new Lanche("Hamburguer", 103, 1.30);
let cheeseburguer = new Lanche("Cheeseburguer", 104, 1.30);
let refrigerante = new Lanche("Refrigerante", 105, 1.00);

function calculateTotal() {
  prompt.get(['number'], function (err, result) {
    const number = parseInt(result.number);

    if (number === 999) {
      console.log('Cálculo total: ' + total.toFixed(2));
      return;
    }

    if (isNaN(number) || number < 100 || number > 105) {
      console.log('Erro: número inválido! Digite um número entre 100 e 105.');
      calculateTotal();
      return;
    }

    let lanche;
    switch (number) {
      case 100:
        lanche = cachorroQuente;
        break;
      case 101:
        lanche = bauruSimples;
        break;
      case 103:
        lanche = bauruComOvo;
        break;
      case 104:
        lanche = cheeseburguer;
        break;
      case 105:
        lanche = refrigerante;
        break;
      default:
        break;
    }

    prompt.get(['quantity'], function (err, result) {
      const quantity = parseInt(result.quantity);
      const subtotal = lanche.valor * quantity;
      console.log('Lanche: ' + lanche.lanche);
      console.log('Subtotal: ' + subtotal.toFixed(2));
      total += subtotal;
      calculateTotal();
    });
  });
}

let total = 0;
console.log('Digite 999 para finalizar o cálculo.');

prompt.start();
calculateTotal();
