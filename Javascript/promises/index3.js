// async function greet() {
//   return "Hello";
// }

// greet().then((data) => {
//   console.log(data);
// });

// async function fetchData() {
//   try {
//     let result = await Promise.resolve("Data rejected");
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchData();

// let click = false;
// function chnage() {
//   click = true;
//   document.getElementsByTagName("button")[0].innerText = "Clicked";
// }
// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (click) {
//         reject("Data Hacked");
//       }
//       resolve("User Data");
//     }, 3000);
//   });
// }

// // await will block the main  thread
// async function fetchingData() {
//   console.log("Fetching............");
//   try {
//     let data = await getUser();
//     console.log(data);
//     console.log("Data fetched");
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchingData();

// const fetchUser = () =>
//   new Promise((resolve) => setTimeout(() => resolve("User Data"), 3000));

// const fetchPost = () =>
//   new Promise((resolve) => setTimeout(() => resolve("Post uploaded"), 2000));

// async function fetchApi() {
//   const data = await Promise.race([fetchUser(), fetchPost()]);
//   console.log(data);
// }

// fetchApi();
// const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

async function Task() {
  const task = [1000, 2000, 3000];

  for (let i = 0; i < task.length; i++) {
    console.log(`waiting ${i / 1000} seconds...`);
    await delay(i);
    console.log("Task done");
  }

  for (let i in task) {
    console.log(`waiting ${task[i] / 1000} seconds...`);
    await delay(i);
    console.log("Task done");
  }
  let len = task.length;
  let i = 0;
  while (i < len) {
    console.log(`waiting ${task[i] / 1000} seconds...`);
    await delay(task[i]);
    console.log("Task done");
    i++;
  }
}
Task();
