// normal function

// function add(a, b) {
//   console.log(a + b);
//   return a + b;
// }

// console.log(add(7, 24));

//anonymus function
var sum = function (a, b) {
  return a + b;
};

var sum1 = sum(2, 3);
console.log(sum1);

let b = 30;
function a() {
  var b = 10;
}
a();
console.log(b);
