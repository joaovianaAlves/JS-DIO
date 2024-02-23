var preco = 100;
var saldo = 50;
var desconto = 0;

var formaDePagamento = "";

if (formaDePagamento === "Debito") {
  desconto = 0.1;
  preco -= preco * desconto;
  console.log(
    `Valor a pagar com desconto: ${preco}R$, desconto:${desconto * 100}R$`
  );
} else if (formaDePagamento === "Dinheiro" || formaDePagamento === "Pix") {
  desconto = 0.15;
  preco -= preco * desconto;
  console.log(
    `Valor a pagar com desconto: ${preco}R$, desconto:${desconto * 100}R$`
  );
} else if (formaDePagamento === "duas vezes") {
  var juros = 0.1;
  preco += preco * juros;
  console.log(`Valor a pagar com juros: ${preco}R$, juros: ${juros * 100}R$`);
} else {
  console.log(`Valor a pagar ${preco}R$`);
}
