function main() {
  let x = 10;
  return function inner() {
    console.log(x);
  };
}
let test = main();
console.log(test);
// console.log(x);
test();
// main();
// inner();
