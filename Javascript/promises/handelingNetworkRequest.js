// async function getUserData(params) {
//   try {
//     let response = await fetch("https://dummyjson.com/products/1");
//     const data = await response.json();
//     // console.log(data);
//     const { title, description, category, price, reviews } = data;
//     // console.log("*************");
//     // console.table([{ title, description, category, price }]);
//     console.log(reviews);
//     reviews.forEach((element) => {
//       const { rating, comment, reviewerName, reviewerEmail } = element;
//       console.table([{ rating, comment, reviewerName, reviewerEmail }]);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUserData();

async function newApi() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    console.log(res);
    const data = res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

newApi();

// It converts a function with multiple parameters into a sequence of functions.
// Each function takes a single argument and returns another function until all arguments are received.

function Currysum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

let newfun = Currysum(7);
let newfun2 = newfun(24);
console.log(newfun2(31));

console.log(Currysum(7)(24)(6));
