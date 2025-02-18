let main = {
  uid: 1,
  obj1: {
    name: "Likhith",
    age: "20",
    qualification: {
      study: "under graduate BTech student",
      college: "AITAM",
      location: {
        district: "Srikakulam",
        city: "Tekkali",
      },
    },
  },
};

// shallow copy  if we chage the copy then main data will change
let main2 = main;
main2.uid = 2;
// console.log(main);
// console.log(main2);

// console.log(Object.keys(main));
// console.log(Object.values(main));
// console.log(Object.entries(main));

// using constructor
const obj = new Object();
obj.name = "LIKHITH PANIGRAHI";
obj.age = 20;
// console.log(obj);

//using function constructor
function details(name, age) {
  this.name = name;
  this.age = age;
  this.obj = {
    name: name,
    age: age,
  };
}

let det = new details("Lik", 20);
// console.log(det);

const newobj = { name: "lIk", clg: "AITAM" };
// console.log(newobj);

let newobj1 = Object.assign({}, newobj);
newobj1.name = "Ganesh";
// console.log(newobj1);
// console.log(newobj);

// Deep copy: whatevere changes done in copy will not reflect in original once

let deepobj = { name: "lIk", clg: "AITAM" };
console.log(deepobj);
// let deepobj1 = JSON.parse(JSON.stringify(deepobj));
// deepobj1.name = "Ganesh";
// console.log(deepobj1);
// console.log(deepobj);
// deepobj.name = "Priya";
// console.log("______________");
// console.log(deepobj);
// console.log(deepobj1);   in this place we can use structuredClone

let deepobj1 = structuredClone(deepobj);
console.log(deepobj1);
deepobj1.name = "Ganesh";
console.log(deepobj1);
console.log(deepobj);
deepobj.name = "Priya";
console.log("______________");
console.log(deepobj);
console.log(deepobj1);
