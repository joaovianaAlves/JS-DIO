var precoEtanol = 3.58;
var precoGasolina = 5.76;
var distanciaKm = 120;
var combustivelTanque = "Gasolina";

if (combustivelTanque == "Gasolina") {
  litroPorKm = 12;
  var gastoMedio = distanciaKm / litroPorKm;
  var precoMedio = precoGasolina * gastoMedio;
  console.log(
    `Gasto de gasolina em ${distanciaKm}KM: ${gastoMedio}L, 
    Preço total da viagem: ${precoMedio.toFixed(2)}`
  );
} else {
  litroPorKm = 7;
  var gastoMedio = distanciaKm / litroPorKm;
  var precoMedio = precoEtanol * gastoMedio;
  console.log(
    `Gasto de Etanol em ${distanciaKm}KM: ${gastoMedio.toFixed(2)}L, 
    Preço total da viagem: ${precoMedio.toFixed(2)}`
  );
}
