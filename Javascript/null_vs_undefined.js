// let a = undefined;
// console.log(typeof a);

// let b = null;
// let c = false;
// console.log(typeof null === null);
// console.log(typeof c);
// let age = 19;
// console.log(age > 18 ? "Can Vote" : "Can't Vote");

// let a = 7;
// let count = 0;
// for (let i = 2; i <= a; i++) {
//   count += a % i == 0 ? 1 : 0;
// }
// console.log(count == 1 ? "Prime" : "Not prime");

// let b = 10;
// console.log(b % 2 == 0 ? "Positive" : "Negative");

// let c = 10;
// console.log(c % 5 == 0 ? "Divisible" : "Not Divisible");

// let d = 9;
// console.log(d % 3 == 0 ? "Divisible" : "Not Divisible");

for (let i = 1; i <= 100; i++) {
  console.log(
    i % 3 == 0 ? (i % 5 == 0 ? "FizzBuzz" : "Fizz") : i % 5 == 0 ? "Buzz" : i
  );
}

console.log(10 !== "10");
