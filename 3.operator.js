//! Operators

//* arithmetic op.
//? + , - , * , / , % , ** [power] , ..

console.log(10 + 2);
let a = "Hello" + "world";
// console.log();

//* assignment
//? = , += , -= ,
let x = 10;
let y = 10;
x += 5; //x = x + 5;
x += y; // x = x + y;

console.log(x); // 25

//* comparision
//? == , === , < , > <= , >= != !==
//? output -> boolean

let b = "10";
let c = 10;
console.log(b == c); // true
console.log(b === c); // false

// 12 <= 12 //

//* logical

//! AND [ &&  ] , OR [ || ] , NOT [ ! ]
let d = false;
let e = true;
console.log(d && e); //
console.log(d || e);

//! a        b           &&              ||
// true     true        true            true
// true     false       false           true
// false    true        false           true
// false    false       false           false

console.log(!d); //
console.log(!e); //

const isMarr = true;

// console.log(isMarr && "");

//! unary op
// increment  ++
let f = 10;
console.log(f++); //10 , 11

console.log(++f); // 11,12
// decrement --

// ternary op
// ??