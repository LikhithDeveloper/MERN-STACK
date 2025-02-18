// Rest operator : we can padd indifinite parameters to the function using this

function sum(...inp) {
  let sum = 0;
  for (let i of inp) {
    console.log(i);
    sum += parseInt(i);
  }
  return sum;
}

const Tsum = sum(1, 2, 3, 4, 5, 6);
// console.log(Tsum);

const arr1 = ["lik", 20, "AITAM"];
const arr2 = ["ganesh", 20, "AITAM"];
// const arr3 = arr1 + arr2;
// console.log(arr3);

// spread operator
console.log([...arr1, ...arr2]);

// difference :- spread operators expands the array or object into elements but rest converts the elemnts into array or object

let arr3 = ["apple", "banana", "kivi", "orange", "grape", "strawberry"];
let arr4 = ([x, y, ...others] = arr3);
console.log(y);
console.log(x);
console.log(others);
console.log(arr4);

let obj = { id: 1, name1: "likhith", age: 20, clg: "AITAM", city: "Sompeta" };
// let obj1 = { ...obj };

// destructuring:- Destructuring in JavaScript is a syntax feature that allows you to
// """extract values from arrays or properties from objects into distinct variables""" in a convenient way.

let { id, name1, ...rest } = obj;
console.log(rest);

// defining default values to the object
let det = {
  fname: "Likhith",
};
console.log(det.fname);

let {
  fname: namex,
  lname = "Panigrahi",
  clg = "AITAM",
  age1 = 20,
  city = "SOMPETA",
} = det;

console.log(clg);

// task

//api response
let response = {
  status: 200,
  data: {
    user: {
      name: "Vedant",
      age: 23,
      address: "Delhi",
    },
  },
};

// way-1
// let { status, data } = response;
// let { user } = data;
// let { name, age, address } = user;

// way-2
let {
  status,
  data: {
    user: { name, age, address },
  },
} = response;

console.log(status);
console.log(name);
console.log(age);
console.log(address);
