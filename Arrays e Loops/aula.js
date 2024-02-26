// const alunos = [{ nome: "joao" }, { nome: "andressa" }, { nome: "breno" }];
// alunos.push({ nome: "alexandre" });
// alunos.pop();
// alunos.push({ nome: "alexandre" });
// alunos.shift();
// console.log(alunos);

// const nome = "joao";

// for (let i = 0; i < nome.length; i++) {
//   let letra = nome[i];
//   console.log(letra);
// }

const notas = [8, 10, 10, 2, 5, 6];

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma += nota;
}
let media = soma / notas.length;
console.log(media.toFixed());
