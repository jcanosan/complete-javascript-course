// 10. Values and variables
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Gina");
console.log(23);

let firstName = "Bob";
let first = "jonas";
let firstNamePerson = "jonas";
console.log(firstName);
firstName = "Matilda";
console.log(firstName);
console.log(firstName);

let threeYears = 3;
let jonasMatilda = "JM";
let $function = 27;

const person = "jonas";
const PI = 3.1415; // global

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
console.log(myCurrentJob);
*/

///////////////////////////////////
// 12. Data types

/*
// Primitive data types
let age = 23; // number
let firstNameMaria = "Maria"; // string
let fullAge = true; // boolean
let undefinedValue; // undefined
null; // null (=empty value)
// symbol (ES2015) (value that is unique and cannot be changed)
// BigInt (ES2020) (larger integers than the Number type can hold)

let javascriptIsFun = true;
console.log("javascriptIsFun", javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "blabla");

javascriptIsFun = "it is!"; // dynamic typing
console.log("javascriptIsFun", javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log("year", year);
console.log(typeof year);
year = 1991;
console.log("year", year);
console.log(typeof year);

console.log(typeof null); // javascript bug, it says it's an object
*/

///////////////////////////////////
// 13. let, const and var
/*
let age = 30;
age = 31;

// use const by default, only use let if you know you are going to change a
// variable
const birthYear = 1991;
// age = 31 // illegal

// const job; // const declarations must be initiallised

// var is old and it must be avoided
var job = "teacher";
job = "computational linguist";

lastName = "Smith";
console.log(lastName);
*/

///////////////////////////////////
// 14. Basic operators
/*
const now = 2037;
const ageGonzalz = now - 1991;
const agePeach = now - 2018;
console.log(ageGonzalz, agePeach);

console.log(ageGonzalz * 2, ageGonzalz / 10, 2 ** 3);

const firstName = "Mario";
const lastName = "Gonzalz";
console.log(firstName + " " + lastName); // template strings is better than this

let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x *= 4;
console.log(x);
x++; // this is the same as x += 1
console.log(x);
x -= 1; // this is the same as x -= 1
console.log(x);
x--; // this is the same as x -= 1
console.log(x);

console.log(ageGonzalz > agePeach);
console.log(ageGonzalz < agePeach);
console.log(agePeach >= 19);
console.log(agePeach > 19);
console.log(agePeach <= 20);
console.log(agePeach < 19);

const isFullAge = agePeach >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2018);
*/

///////////////////////////////////
// 15. Operator precedence
/*
const now = 2037;
const ageGonzalz = now - 1991;
const agePeach = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageGonzalz + agePeach) / 2;
console.log(ageGonzalz, agePeach, averageAge);
*/

///////////////////////////////////
// 16. Strings and template literals
/*
const firstName = "Mario";
const job = "wrestler";
const birthYear = 1985;
const year = 2037;

const mario =
  "It's a me " +
  firstName +
  ", a " +
  (year - birthYear) +
  " year old " +
  job +
  "!";
console.log(mario);

const marioTemplateLiteral = `It's a me ${firstName}, a ${
  year - birthYear
} year old ${job}!`;
console.log(marioTemplateLiteral);
console.log(`This is a backticked regular string`);

console.log(
  "This is \n\
a \n\
multilined \n\
string"
);

console.log(`This is 
another 
multilined 
string`);
*/

///////////////////////////////////
// 18. if / else Statements

/*const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sarah can start driving license 😎");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 😔`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

///////////////////////////////////
// 20. Type Conversion and Coercion
/*
const inputYear = "1990";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN); // it is a number
console.log(typeof Number("Jonas")); // it is a number

console.log(String(24), 23);

// type coercion
console.log("I am " + 32 + " years old");
console.log(`I am ${32} years old`);
console.log("23" - "3" - 10); // coercion to number
console.log("23" + "3" + 10); // coercion to string
console.log("23" + "3" - 10); // coercion to number
console.log("23" - "3" + 10); // coercion to number
console.log("23" - 3 + "10"); // coercion to string
console.log(23 - "3" + "10"); // coercion to string

let n = "1" + 1; // string "11"
n = n - 1; // number 10
console.log(n);
*/

///////////////////////////////////
// 21. Truthy and Falsy Values

// Falsy values: 0, '', undefined, null, NaN, false
// Everything else is truthy
/*
console.log(Boolean(false)); // falsy
console.log(Boolean(0)); // falsy
console.log(Boolean(undefined)); // falsy
console.log(Boolean(null)); // falsy
console.log(Boolean(NaN)); // falsy
console.log(Boolean("")); // falsy
console.log(Boolean([])); // truthy
console.log(Boolean({})); // truthy
console.log(Boolean("Jonas")); // truthy

let money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("Credit card rejected");
}
money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("Credit card rejected");
}

let height;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
height = 123;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
height = 0;
if (height || height === 0) {
  console.log("Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

///////////////////////////////////
// 22. Equality operators: == vs. ===
/*
const age = 32;
if (age === 32) console.log("You're 32 (strict int)"); // Strict equal operator, doesn't do type coercion
if (age === "32") console.log("You're 32 (strict str)"); // Strict equal operator, doesn't do type coercion
if (age == 32) console.log("You're 32 (loose int)"); // Loose equal operator, does perform type coercion
if (age == "32") console.log("You're 32 (loose str)"); // Loose equal operator, does perform type coercion

const favouriteNumber = Number(prompt("What's your favourite number?"));
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if (favouriteNumber == 17) {
  console.log("Cool 17 (type coercion)");
}
if (favouriteNumber === 17) {
  console.log("Cool 17 (not type coercion)");
} else if (favouriteNumber === 7) {
  console.log("7 is also cool! (not type coercion)");
} else {
  console.log("number is ", favouriteNumber);
}

if (favouriteNumber !== 17) {
  // there is also loose !=
  console.log("Why not 17?");
}
*/

///////////////////////////////////
// 26. The switch statement
/*
const day = "friday";

switch (day) {
  case "monday": // day === "monday"
    console.log("It's Monday!");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("It's Tuesday!");
    break;
  case "wednesday":
  case "thursday":
    console.log("It's Thursday!");
    break;
  case "friday":
    console.log("It's Friday!");
    break;
  case "saturday":
  case "sunday":
    console.log("It's Sunday!");
    break;
  default:
    console.log("Invalid day");
}

if (day === "monday") {
  console.log("It's Monday!");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("It's Tuesday!");
} else if (day === "wednesday" || day === "thursday") {
  console.log("It's Wednesday or Thursday!");
} else if (day === "friday") {
  console.log("It's Friday!");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend!");
} else {
  console.log("Invalid day");
}
*/

///////////////////////////////////
// 27. Statements and expressions
/*
if (23 > 10) {
  const str = "23 is bigger"; // Expression
} // Statement

console.log(`I'm ${2037 - 1991} years old`);
*/

///////////////////////////////////
// 28. The conditional operator

const age = 17;
age >= 18 // condition
  ? console.log("I like to drink wine") // if
  : console.log("I like to drink water"); // else

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}!`);
