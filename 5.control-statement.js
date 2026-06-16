//! type conversion
//! explicit  conversion

// let a = "12ra";

// console.log(Boolean(a)); //
// // String()
// // Number()
// console.log(Number(a));
// console.log(parseInt(a));
// console.log(parseInt("1200a"));
// console.log(parseFloat("123.12"));

// //! implicit conversion : type coearcing
// // console.log("10" + 10); // 1010
// // console.log("10" - 4); //
// // console.log("ab" - 4); //

// //! truthy & falsy values

// //* falsy : false , null , undefined , 0 ,-0  , '' , NaN
// console.log(Boolean(null));
// console.log(Boolean(""));
// console.log(Boolean(-0));

// let a = -10;
// if (a) {
//   console.log("Hello");
// }

// let user = {};

// if (!user) {
//   throw Error("");
// }

// //   onsole.log("Hello");

// //! control flow

// //! control statements
// //if

// // if else

// // let age = 60;
// // let res = null;
// // if (age >= 18) {
// //   // console.log("Can vote");
// //   res = "can vote";
// // } else {
// //   // console.log("can not vote");
// //   res = "can not vote";
// // }

// // console.log(res);

// //! else-if ladder
// // if age >= 60  -> major
// // if age > 18  < 60 -> adult
// // if age < 18  -> minor
// if (age >= 60) {
//   console.log("Major");
// } else if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }

// //todo: switch-case
// //todo: ternary op. ( ?: )
// // condition ?  exp_1 : exp_2
// // let age = 17;
// // let res = age >= 18 ? "can vote" : "can not vote";
// // let result = age >= 60 ? "Major" : age >= 18 ? "Adult" : "Minor";
// // console.log(res);
// // console.log(result);

// //todo: typeof op
// let b = 12;

// console.log(typeof b === "number"); //
// b = "";
// console.log(typeof b); //
// // console.log(typeof b === "");
// console.log(typeof null);

//! loops
// {

// }

//! do-while
// do {

// } while (condition);

console.log("do-while");

let i = 11;
do {
  console.log(i);
  // i = i + 1;
  i++;
} while (i <= 10);

//! while
console.log("while");

let j = 11;
while (j <= 10) {
  console.log(j);
  j++;
}

//! for
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//! for in

//! for of

//* jump/branching statements
//? break
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

//? continue
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
//? return
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    return;
  }
  console.log(i);
}

//* print odd numbers betn 1-10