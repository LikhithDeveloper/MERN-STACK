//for in loop
//for of loop
//for each

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

let obj = { name: "lik", age: "20", clg: "AITAM" };
for (let i in obj) {
  console.log(typeof i);
  console.log(i, ":", obj[i]);
}

// use for array and strings
let arr = [1, 2, 3, 4, 5, 6];
for (let k of arr) {
  console.log(k);
}
console.log(" ");

// used for arrays
arr.forEach((ele) => console.log(ele));
