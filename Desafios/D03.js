class Salario {
  constructor(salarioBruto, adicionais) {
    this.salarioBruto = salarioBruto;
    this.adicionais = adicionais;
  }
  calculaImposto(salarioBruto) {
    let imposto = 0;
    if (salarioBruto >= 0 && salarioBruto <= 1100) {
      imposto = 5;
      salarioBruto *= imposto / 100;
    } else if (salarioBruto <= 2500) {
      imposto = 10;
      salarioBruto *= imposto / 100;
    } else {
      imposto = 15;
      salarioBruto *= imposto / 100;
    }
    return salarioBruto;
  }
  calculaSalario() {
    let salarioBruto = this.salarioBruto + this.adicionais;
    let salatioLiquido = salarioBruto - this.calculaImposto(salarioBruto);
    console.log(
      `Salario Bruto: ${salarioBruto}, Salario Liquido: ${salatioLiquido}`
    );
  }
}

let p1 = new Salario(2246, 100);
p1.calculaSalario();
