const prompt = require('prompt'); // to trazendo a biblioteca npm pra que seja possível fazer as operações no console.

// aqui eu to usando uma função construtora pra (capaz) construir um objeto. esse objeto contém 3 propriedade: lanche, que vai ser o nome do lanche; código, que é aquele número entre 100 e 105; e valor, que é o preço do lanchinho.

// não tem mistério, essa é a sintaxe do rolê. mais explicação aqui: <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects>
function Lanche(lanche, codigo, valor) {
  this.lanche = lanche;
  this.codigo = codigo;
  this.valor = valor.toFixed(2);
}

// aqui eu to instanciando novos objetos a partir da função construtura, então cada variável recebe as propriedades específicas que eu quiser, de acordo com o que eu determinei ali em cima. também não tem mistério, é saber a sintaxe.
let cachorroQuente = new Lanche("cachorro-quente", 100, 1.20);
let bauruSimples = new Lanche("Bauru Simples", 101, 1.30);
let bauruComOvo = new Lanche("Bauru com Ovo", 102, 1.50);
let hamburguer = new Lanche("Hamburguer", 103, 1.30);
let cheeseburguer = new Lanche("Cheeseburguer", 104, 1.30);
let refrigerante = new Lanche("Refrigerante", 105, 1.00);

// agora que eu tenho os lanches determinados, com nome, códigos e valores, eu posso começar a pensar em como receber entradas do usuário e como vincular o que o usuário pedir aos dados que eu já tenho. a função calcularTotal() tá fazendo várias coisas e isso talvez seja um problema, mas vamo lá

function calcularTotal() {
  prompt.get(['codigo'], function (err, result) { // isso aqui é sintaxe, tá vindo das instruções da biblio desse prompt 
    const codigo = parseInt(result.codigo); //parseInt aqui ta garantindo que eu vou ter um número como resultado dessa entrada.

// essa é a minha condição mais importante, é ela que encerra o cálculo se o número digitado no prompt for 999
    if (codigo === 999) {
      console.log('============== Cálculo total ==============');
      console.log('Lanche\t\tCódigo\tValor\tQuantidade\tSubtotal');
      console.log('--------------------------------------------');
      for (const listaLanches of listaFinalLanches) {
        console.log(`${listaLanches.lanche}\t${listaLanches.codigo}\t${listaLanches.valor}\t${listaLanches.quantidade}\t\t${listaLanches.subtotal.toFixed(2)}`);
      }
      console.log('--------------------------------------------');
      console.log('Cálculo total: ' + total.toFixed(2));
      return;
    }

// essa condição verifica se o usuário está digitando um número entre 100 e 105, se ele digitar algo diferente aparece uma mensagem de erro. e a função reinicia com o primeiro prompt que pede novamente o código
    if (codigo < 100 || codigo > 105) {
        console.log('Erro: número inválido! Digite um número entre 100 e 105');
        calcularTotal();
        return;
      }

// essa condição impede a passação de pano pra um usuário que digitar letra. o algortimo reconhece que os caracteres digitados não são um número e pede ao usuário que digite um número.
      if (isNaN(codigo)) {
          console.log('Isso não é um número. Por favor digite um número');
          calcularTotal();
          return;
        }

// aqui eu tenho uma estrutura switch 
    let lanche;
    switch (codigo) {
      case 100:
        lanche = cachorroQuente;
        break;
      case 101:
        lanche = bauruSimples;
        break;
      case 102:
        lanche = bauruComOvo;
        break;
      case 103:
        lanche = hamburguer;
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

    prompt.get(['quantidade'], function (err, result) {
      const quantidade = parseInt(result.quantidade);

      if (isNaN(quantidade)) {
        console.log('Isso não é um número, meu bem. Por favor, facilita o rolê e digita um número');
        calcularTotal();
        return;
      }

      const subtotal = lanche.valor * quantidade;
      console.log(`Lanche: ${lanche.lanche}`);
      console.log(`Valor: ${lanche.valor}`);
      console.log(`Subtotal: ${subtotal.toFixed(2)}`);

      
// essa lista foi necessária pra exibir o histórico da entrada dos pedidos no final, porque eu não tava conseguindo de outro jeito
      const listaLanches = {
        lanche: lanche.lanche,
        codigo: lanche.codigo,
        valor: lanche.valor,
        quantidade: quantidade,
        subtotal: subtotal
      };
      listaFinalLanches.push(listaLanches);
      total += subtotal;
      calcularTotal();
    });
  });
}

let total = 0;
let listaFinalLanches = [];
console.log('Digita 999 para finalizar o cálculo, minha querida!');

prompt.start();
calcularTotal();
