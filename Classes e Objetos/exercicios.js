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
class Pessoa {
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    let imc = this.peso / Math.pow(this.altura, 2);
    return imc;
  }

  classificarImc() {
    let imc = this.calcularImc();
    if (imc <= 18.5) {
      return console.log("Baixo peso");
    } else if (imc <= 24.99) {
      return console.log("Normal");
    } else if (imc <= 29.99) {
      return console.log("Sobrepeso");
    } else {
      return console.log("Obesidade");
    }
  }
}

const joao = new Pessoa("joao", 78, 1.71);
joao.classificarImc();
