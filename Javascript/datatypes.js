// Data types in java script

// 1. Primitive Datatypes => Number, string, boolean, undefined, null and symbol
// 2. Non Primitive => object, array and function

// 1. Number => it is represented both integer and float numbers and range is 2^53.
// if any number is greater than 2^53 then you can use bigint.

// 2. string =>  it is used to represent a sequence of characters. It is enclosed in single qoutes(' '),
// double quotes(" ") or bacticks(` `).

// 3. boolean => it is used to represent logical value. It will have only two values true and false

// 4. undefined => it is used to represent an undefined value.

// 5. null => it is not a datatype its an value it represent an empty value.

// Non Primitive Datatypes =>

// Objects => It is used to represent a collection of key-value pairs

// let person = {
//   name: "Likhith",
//   age: 20,
//   isMale: true,
//   salary: 299999,
//   marks: 8.0,
//   college: {
//     name: "AITAM",
//     location: "Tekkali",
//     courses: ["CSM", "CSD", "CSE", "IT"],
//   },
// };

// console.log(person);
// console.table(person);

// console.log(person.name);
// console.log(person.isMale);
// console.log(person.college);
// console.log(person.college.courses);

// Array => It is used to represent a collection of element

// let cars = [
//   "BMW",
//   "AUDI",
//   "TATA",
//   "MERCEDES",
//   "RANGEROVER",
//   "LAMBORGINI",
//   "BUGATI",
//   ["MERCEDES", "RANGEROVER"],
//   { car1: "MERCEDES", car2: "RANGEROVER" },
//   true,
//   false,
//   247,
//   null,
//   undefined,
// ];
// console.log(cars);

// function => function is a block of code that performs a specific tasks. function is executed when its called or invoked
// used to avoid code duplication

// function First(language) {
//   console.log("Welcome ");
//   return `to ${language}`;
// }

// console.log(First("js"));

let age = 20;
if (age > 20) {
  console.log("You are eligible for voting");
} else {
  console.log("You are not eligible for voting");
}

let a = "b";
switch (a) {
  case "a":
    console.log("Hi");
    break;
  case "b":
    console.log("Hello");
  default:
    console.log("Nothing!");
    break;
}
