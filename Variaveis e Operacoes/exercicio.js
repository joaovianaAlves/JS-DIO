let precoCombustivel = 5.79;
let tanque = 10;
let kmPorLitro = 10;
let kmViagem = 30;
let gastoMedio = kmViagem / kmPorLitro;
let valorGasto = precoCombustivel * tanque;

console.log("----Antes da Viagem----");
console.log(`Tanque: ${tanque}L`);
console.log(`KM da viagem: ${kmViagem}Km`);
console.log(`KM por litro: ${kmPorLitro}L`);
console.log(`Gasto medio com a viagem: ${gastoMedio}L`);

console.log("----Depois da Viagem----");
console.log(`Tanque: ${tanque - gastoMedio}L`);
console.log(`KM da viagem: ${kmViagem - kmViagem}Km`);
console.log(`Total gasto com combustivel: ${valorGasto.toFixed(2)}R$`);
console.log(
  `Gasto medio com a viagem em reais: ${
    gastoMedio * precoCombustivel.toFixed(2)
  }R$`
);
