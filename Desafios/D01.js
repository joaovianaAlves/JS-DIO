class Aluno {
  constructor(nome, p1, p2) {
    this.nome = nome;
    this.p1 = p1;
    this.p2 = p2;
  }
  calcularMedia() {
    let media = (this.p1 + this.p2) / 2;
    return media > 6 && media <= 10
      ? `O aluno ${this.nome} esta Aprovado com media: ${media}`
      : `O aluno ${this.nome} esta Reprovado com media: ${media}`;
  }
}

let aluno = new Aluno("joao", 10, 10);
console.log(aluno.calcularMedia());
