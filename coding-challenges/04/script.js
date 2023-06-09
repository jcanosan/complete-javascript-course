const bill = 275;

/* Write your code below. Good luck! 🙂 */

const tipPercentage = bill >= 50 && bill <= 300 ? 15 : 20;
const tip = (bill / 100) * tipPercentage;
console.log(
  `The bill was ${bill}, the tip was ${tip} (${tipPercentage}%) and the total value ${
    bill + tip
  }`
);
