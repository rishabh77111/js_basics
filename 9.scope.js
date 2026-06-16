//! Scope

//* global scope
// let global_let = "global_let";
// const global_const = "global_const";
// var global_var = "global_var";
// console.log(global_let);

//* block scope {}
if (true) {
  let block_let = "block_let";
  const block_const = "block_const";
  var block_var = "block_var";
  console.log("-----block-----");
  //   console.log(global_var);
  //   console.log(block_const, block_let, block_var);
}

// console.log(block_var);  //block_var
// console.log(block_let); // X
// console.log(block_const);  // X

//* function scope

// const scope = () => {
//   let function_let = "function_let";
//   const function_const = "function_const";
//   var function_var = "function_var";
//   console.log("-----function-----");
//   //   console.log(block_var); //
//   console.log(function_const, function_let, function_var); //

//   //   console.log(global_var);
// };

// scope();

// console.log(function_let); // function_let is not defined
// console.log(function_const); // ReferenceError: function_const is not defined
// console.log(function_var); // ReferenceError: function_var is not defined

//* lexical scope
console.log("-----lexical scope-----");

// const outer = () => {
//   let outer_let = "outer let"; // ReferenceError: x is not defined
//   //   console.log(x);
//   const inner = () => {
//     let x = 10;
//     console.log(x);
//     console.log(outer_let);

//     const child = () => {
//       console.log("child");
//       console.log(x);
//       console.log(outer_let);
//     };
//     child();
//   };
//   inner();
// };

// outer();

//* scope chain

let outer_let = "global let";

const outer = () => {
  //   let outer_let = "outer let"; // ReferenceError: x is not defined
  //   console.log(x);
  console.log(outer_let);
  const inner = () => {
    let outer_let = "inner let";
    let x = 10;
    console.log(x);
    console.log(outer_let); //

    const child = () => {
      console.log("child");
      console.log(x);
      console.log(outer_let); //
    };
    child();
  };
  inner();
};

// outer();

let x = 50;

if (true) {
  let x = 10;
  if (true) {
    console.log(x); // 10
    x = 30;
  }
  console.log(x); // 10 , not defined  // 30 as output
}
console.log(x); //  30  //50
//The inner x and outer x are different variables.
//inside the block changes only the block variable, not the global one.

function scope() {
  if (true) {
    let x = 40;
    if (true) {
      console.log(x);
      x = 56;
    }
    console.log(x);
  }
  //   console.log(x);
}

scope();
console.log(x); //  30