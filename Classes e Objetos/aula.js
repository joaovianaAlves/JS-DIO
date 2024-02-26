// const joao = {
//   nome: "joao",
//   idade: 18,

//   descrever: function () {
//     console.log(`Meu nome é ${this.nome}, e minha idade é ${this.idade}`);
//   },
// };

// joao.descrever();

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  descrever() {
    console.log(`Meu nome é ${this.nome}, e minha idade é ${this.idade}`);
  }
}

function comparaPessoas(p1, p2) {
  let resultado;
  if (p1.idade > p2.idade) {
    resultado = `${p1.nome} é mais velho que ${p2.nome}`;
  } else if (p2.idade > p1.idade) {
    resultado = `${p2.nome} é mais velho que ${p1.nome}`;
  } else {
    resultado = `${p1.nome} e ${p2.nome} têm a mesma idade`;
  }
  return console.log(resultado);
}

const joao = new Pessoa("joao", 19);
const alexandre = new Pessoa("alexandre", 19);

comparaPessoas(joao, alexandre);
