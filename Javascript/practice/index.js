// shallow copy

// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);

// let arr2 = arr1;
// console.log(arr2);
// console.log("_____________");
// arr1[0] = 10;
// console.log(arr2);
// console.log(arr1);

// deep copy

let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

// let arr2 = JSON.parse(JSON.stringify(arr1));
let arr3 = arr1.toLocaleString();
console.log(arr2);
console.log("_____________");
arr1[0] = 10;
console.log(arr2);
console.log(arr1);
console.log(arr3);
