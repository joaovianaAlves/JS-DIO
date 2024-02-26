//Ex 01
function myName(name) {
  console.log(`Nome: ${name}`);
}

//Ex 02
function verifyAge(age) {
  console.log(age >= 18 ? "Maior de Idade" : "Menor de Idade");
}

//Ex 03
function person(name, age) {
  myName(name);
  verifyAge(age);
}

//Ex 04
function desconto(valor, taxaDesconto) {
  let valorDesconto = (valor * taxaDesconto) / 100;
  return console.log(
    `Valor sem disconto ${valor}, desconto ${taxaDesconto}%, valor total: ${
      valor + valorDesconto
    } `
  );
}

function juros(valor, taxaJuros) {
  let valorJuros = (valor * taxaJuros) / 100;
  return console.log(
    `Valor sem juros ${valor}, juros ${taxaJuros}%, valor total: ${
      valor + taxaJuros
    } `
  );
}

function formaDePagamento(valor, pagamento) {
  switch (pagamento) {
    case 1:
      desconto(valor, 10);
      break;
    case 2:
      desconto(valor, 15);
      break;
    case 3:
      juros(valor, 10);
      break;
    default:
      console.log(`valor total: ${valor}`);
      break;
  }
}

formaDePagamento(100, 4);
person("joao", 19);
