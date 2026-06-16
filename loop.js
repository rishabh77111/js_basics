//1. Basic for Loop
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}


//2. while Loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}


//3. do...while Loop ---Runs at least once, then checks condition.
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);


//4. for...of Loop ---Best for arrays, strings, Maps, Sets — gives you the value.
const fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
  console.log(fruit); // apple, banana, mango
}

js// Works on strings too
for (const char of "hello") {
  console.log(char); // h, e, l, l, o
}

//5. for...in Loop ---Best for objects — gives you the key.
const user = { name: "Rishabh", age: 22, city: "Nepal" };

for (const key in user) {
  console.log(key, ":", user[key]);
}
// name : Rishabh
// age : 22
// city : Nepal


//6. forEach Loop ---Only for arrays. Cannot use break or return to stop it.
const nums = [10, 20, 30];

nums.forEach((num, index) => {
  console.log(index, num);
});
// 0 10
// 1 20
// 2 30


//7. for await...of Loop ---For looping over async iterables — handles Promises one by one.
async function fetchAll() {
  const urls = [url1, url2, url3];

  for await (const response of urls.map(fetch)) {
    console.log(await response.json());
  }
}




// Array values → for...of or forEach
// Object keys → for...in
// Async data → for await...of
// Full control → basic for