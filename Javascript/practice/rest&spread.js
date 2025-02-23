//Rest:- function ki more than one argument pass cheytaniki use chestam

function sum(...a) {
  console.log(a);
}
sum(7, 10, "lik");

// in JS array is an object
// to convert elements into objects/arrays

let api = [
  {
    name: "Priya",
    age: 20,
    class: "10th",
  },
  {
    name: "Priya",
    age: 20,
    class: "10th",
  },
  {
    name: "Priya",
    age: 20,
    class: "10th",
  },
  {
    name: "Priya",
    age: 20,
    class: "10th",
  },
];

let test = JSON.parse(JSON.stringify(api));
// console.log(typeof test);

// spread operator objects to elements

let obj2 = {
  clg: "Priya",
  height: 20,
  rol: "10th",
};
// console.log({ ...obj, ...obj2 });

// Destructuring

let obj = {
  name: "Priya",
  age: 20,
  class: "10th",
};

let { name, age } = obj;
console.log(name);
