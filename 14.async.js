//! async

console.log("start");
console.log("processing");
console.log("end");

console.log("start");
const timer_id = setTimeout(
  (num, name) => {
    console.log("processing", num, name);
  },
  2000,
  23,
  "rk",
);
console.log("end");
console.log(timer_id._timerArgs);

///The arrow function (num, name) => { console.log(num, name); } is the callback function passed to setTimeout, which is executed after the specified delay.
//! setInterval
console.log("start");
let i = 0;
const id = setInterval(() => {
  console.log(i);
  if (i === 10) {
    clearInterval(id);
  }
  i++;
}, 1000);
console.log(end);


//! countdown timer
//hr,min.sec
// const prompt = require("prompt-sync")(); // for Node.js input
// let input = Number(prompt("Enter total seconds: "));



//todo: callback,promise



const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data fetched");
  } else {
    reject("Error occurred");
  }
}); 

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });