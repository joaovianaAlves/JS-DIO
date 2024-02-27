// //Ex 01
// let numero = 7;

// for (let i = 1; i <= 10; i++) {
//   let resultado = numero * i;
//   console.log(resultado);
// }

//Ex 02
let numeros = [];
for (let i = 0; i <= 100; i++) {
  numeros[i] = Math.floor(Math.random() * (i + 1));
}

for (let i = 0; i <= numeros.length; i++) {
  let numero = numeros[i];
  let resultado = numero % 2 == 0 ? `${numero} e par` : `${numero} e impar`;
  console.log(resultado);
}
