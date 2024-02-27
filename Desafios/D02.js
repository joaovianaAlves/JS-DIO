class ParImpar {
  constructor(qtdNumeros) {
    this.qtdNumeros = qtdNumeros;
    this.maiorNumPar = -Infinity;
    this.menorNumImpar = Infinity;
  }

  geraNumeros() {
    for (let i = 0; i < this.qtdNumeros; i++) {
      let random = Math.floor(Math.random() * 100);
      if (random % 2 == 0)
        this.maiorNumPar = Math.max(this.maiorNumPar, random);
      else this.menorNumImpar = Math.min(this.menorNumImpar, random);
    }
    console.log(this.maiorNumPar, this.menorNumImpar);
  }
}

let numero = new ParImpar(100);
numero.geraNumeros();
