var peso = 78;
var altura = 1.71;
var imc = peso / (altura * altura);
console.log(imc);

if (imc > 0) {
  if (imc < 18.5) {
    console.log("Abaixo do Peso");
  } else if (imc <= 25) {
    console.log("Peso Ideal");
  } else if (imc <= 30) {
    console.log("Acima do Peso");
  } else if (imc <= 40) {
    console.log("Obeso");
  } else {
    console.log("Obesidade Grave");
  }
}
