//boolean = variavel de dois valores true ou false
// const eAzul = true; // 1
// const ePreto = false; // 0

// const condicinal = eAzul != ePreto;

// console.log(condicinal);

let numero = 10;

for (let i = 1; i <= numero; i++) {
  let resultado = i % 2 === 0;
  console.log(`O numero ${i} é ${resultado == true ? "par" : "impar"}`);
}
