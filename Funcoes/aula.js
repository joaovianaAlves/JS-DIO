function ShowNumber(number) {
  console.log(`Your number is: ${number}`);
}

ShowNumber(2);
ShowNumber(1);
ShowNumber(5);

function Squared(number) {
  var square = number * number;
  console.log(`Your number: ${number}, Squared: ${square}`);
}

Squared(2);
Squared(1);
Squared(5);

function incrementFees(value, percentual) {
  var totalValue = value + (percentual / 100) * 100;
  console.log(`Your value: ${value}, with ${percentual}% fees: ${totalValue}.`);
}

incrementFees(20, 100);
