let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log("BMIMark", BMIMark);
console.log("BMIJohn", BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log("markHigherBMI", markHigherBMI);

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / (heightJohn * heightJohn);
console.log("BMIMark", BMIMark);
console.log("BMIJohn", BMIJohn);

markHigherBMI = BMIMark > BMIJohn;
console.log("markHigherBMI", markHigherBMI);
