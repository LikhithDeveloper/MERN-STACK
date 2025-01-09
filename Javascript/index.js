// console.log("Task-1");
// console.log("Task-2");
// console.log("Task-3");
// console.log("Task-4");

// // alert and write on page in JS
// // alert("Hi this is test");
// // document.write("<p>Hello world</p>");

// // variables in JS

// const accountId = 247; // we can't reassign the value and redeclare block scope cannot change throughout the program
// let accountName = "Likhith"; // block scope we cant redeclare
// var accountBalance = 1; // function scope we can redeclare and reassign
// accountAddress = "Sompeta";

// // accountBalance = "sndcnsk";
// // hoisting and temporal dead zone
// console.log(accountId);
// console.log(accountName);
// console.log(accountBalance);
// console.log(accountAddress);

// console.table([accountId, accountName, accountBalance, accountAddress]);
// console.table({ accountId, accountName, accountBalance, accountAddress });

// Hoisting:- it is a mechanism in JS that moves the decleration of the variable to the top of the scope befor the code execution.

// in case of var:-
// Variables declared with var are hoisted and initialized with undefined.
// This means you can access the variable even before the declaration, but its value will be undefined until the execution reaches the declaration line.

// in case of let and const:-
// Variables declared with let and const are hoisted, but unlike var, they are not initialized immediately.
// They remain in a Temporal Dead Zone (TDZ) from the start of their enclosing scope until the declaration is encountered.

console.log(name);
var name = "Likhith";
console.log(name);

// console.log(name1);
// let name1 = "Likhith";
// console.log(name1);

// console.log(name2);
const name2 = "Likhith";
console.log(name2);
