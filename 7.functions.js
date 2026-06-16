// //!functions


// //function invocation/call
// //function_name();

// //greet:(){},x:10}
// //let x=10;
// function greet(){
//     console.log("Hello world");
// }

// greet();//(){}()//
// //x()//10()
// greet();

// //!function with input
// //?function & arguments
// function greet(name){//name:parameter
//     //let name=''
//     console.log("Hello ",name);
// }
// greet("john");//john:arguments
// greet(); // output:Hello undefined

// //!default parameter
// function greet(name='guest',age){
//   console.log("Hello ",name);
// }
// greet();
// greet("john",27);//john:arguments
// greet(30,"bob"); //o/p:hello 30 bob

// function add(a,b){
//     console.log(a+b);
// }
// add(12,3);
// add(10);//output:NaN

// //!function with return type
// function add(a=0,b=0){
// let sum=a+b;
// return sum;
// }

// let result=add(12,3);
// console.log(result);//if return sum not written then o/p: undefined

// function oddEven(num){
//     if(num%2==0){
//         return true;
//     }
//     else if(num%2==1){
//         return false;
//     }

//     //return num%2 === 0;
// }


// let res=oddEven(10);
// console.log(res);
// console.log(oddEven(12));


// //! function expression
// //let x=3+12; //expression
// //variable ma function body assign garne

// const sub=function(a,b){// since function name not there so it is anonymous function
//    return a-b;
// };
// console.log(sub(10,5));

// const isOdd=function(num){
//      return num%2===1;
// }
// console.log(isOdd(10));

// //! arrow function


// const multiply=function(a,b){
//     return a*b;
// };
// console.log(multiply(12,2));

// //arrow function
// const multiply=(a,b) => {
//     return a*b;
// };
// console.log(multiply(12,4));

// //const multiply=(a,b) => a*b;  //if only one return statement

// const double=a => a*2;  // if single parameter 

//! callback function
console.log("-----------------------------------------------------------------");

const parent=function(x){
    console.log("parent");
    x();
};
const child=function(x){
    console.log("child");
   
};
parent(child);      //here child is callback function


const parent=function(callback){
    console.log("parent");
    callback(10);
};
// const child=function(a){
//     console.log("child",a);
   
// };
// parent(child());      //here child not callback function

parent(function(a){
    console.log("child",a);
    return 100;
});

parent((a)=>{ //pure anonyms function
  console.log("child",a);
    return 100;
});



//! higher order function

const hof=()=>{
  console.log("hof");
  const child=()=>{
    console.log("children")
  }
  return child;
}
const children=hof();
children();
console.log(children);

const hof=()=>{
  console.log("hof");
  const child=100;
  return child;
}
const children=hof();
console.log(children);


//*convert fun to arrow fun

const outer=(num1)=>{
  const inner=(num2)=>{
    return num1+num2;
  }
  return inner;
}
const add5=outer(5);
console.log(add5(10));


const outer=(num1)=>(num2)=>num1+num2;


//factory function see
//*factory function
function createUser(name, age) {
    return {
        name: name,
        age: age
    };
}

const user1 = createUser("Ram", 20);
const user2 = createUser("Sita", 22);

console.log(user1);
console.log(user2);
console.log(outer());
//todo: IIFE
function greet() {  //normal function ---need to call
    console.log("Hello");
}
greet();

/*(function (){ 
// Function Logic Here. 
})();  */

(function () {   //IIFE(Immediately Invoked Function Expression)
    console.log("Hello");
})();



//!examples practice me

function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Rishabh", sayBye);
// Hello, Rishabh
// Goodbye!

// Synchronous Callback
function calculate(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(calculate(5, 3, add));       // 8
console.log(calculate(5, 3, multiply));  // 15

//2. Asynchronous Callback (setTimeout)
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Rishabh" };
    callback(data);
  }, 2000);
}

fetchData((result) => {
  console.log("Got data:", result);
});

//3. Array Methods (most common use)
const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(n => console.log(n));

// filter
const evens = numbers.filter(n => n % 2 === 0);  // [2, 4]

// map
const doubled = numbers.map(n => n * 2);  // [2, 4, 6, 8, 10]

//4. Error-First Callback (Node.js style)
function readFile(path, callback) {
  if (!path) {
    callback("Error: No path given", null);
  } else {
    callback(null, "File content here...");
  }
}

readFile("./data.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

//Callback Hell (avoid this)
// Gets messy fast ❌
login(user, () => {
  getProfile(() => {
    getPosts(() => {
      // deeply nested...
    });
  });
});

