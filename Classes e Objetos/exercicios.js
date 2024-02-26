//Ex 01
class Carro {
  constructor(marca, cor, distancia, litros) {
    this.marca = marca;
    this.cor = cor;
    this.distancia = distancia;
    this.litros = litros;
  }

  gastoMedio() {
    let valor = this.distancia / this.litros;
    return valor;
  }

  gastoViagem() {
    let valorGasolina = 5.76;
    let valorTotal = (this.distancia / this.gastoMedio()) * valorGasolina;
    return console.log(
      `Distancia: ${this.distancia}Km, gasto medio: ${this.gastoMedio().toFixed(
        2
      )}Km/L, valor total da viagem: ${valorTotal.toFixed(2)}R$`
    );
  }
}

const gol = new Carro("fiat", "preto", 200, 15);
gol.gastoViagem();

//Ex 02
