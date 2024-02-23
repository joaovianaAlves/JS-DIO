var p1 = 10;
var p2 = 10;
var p3 = 9;
var media = (p1 + p2 + p3) / 3;

if (media >= 0 && media <= 10) {
  if (media < 5) {
    console.log(`Reprovado ${media.toFixed(1)}`);
  } else if (media <= 6) {
    console.log(`Recuperação ${media.toFixed(1)}`);
  } else {
    console.log(`Aprovado ${media.toFixed(1)}`);
  }
} else {
  console.log("Alguma das notas e invalida");
}
