//!excution context  --bne paxi matr memrory creation and excution phase bnxha
//! call stack  -- only one in js so it is single threaded language


//CEC
//BEC
//AEC
//GEC
//callstack

// memory creation
// {a:(){}}

// execution

let x = 10;

console.log(x);

function a() {
  let y = 30;
  console.log(y);

  function b() {
    console.log("b");

    function c() {
      console.log("c");
    }

    c();
  }

  b();
}
// a();
// a();
// a();

//GEC
//callstack

//! closure
// const Counter = () => {
//   let count = "parent scope";

//   return () => {
//     console.log(count);
//   };
// };

// const child = Counter();
// const child1 = Counter();

// child(); //
// child1(); //

// const Counter = () => {
//   let count = 0;

//   const child = () => {
//     count++;
//     console.log(count);
//   };

//   return child;
// };

// const counter = Counter(); // {count:3}
// const counter1 = Counter(); // {count:2}
// counter(); // 0
// counter(); // 1
// counter(); // 2
// counter(); // 3
// counter1(); //  0
// counter1(); //  1

const Counter = () => {
  let count = 0;

  //! decrement
  const decrement = () => {
    count--;
    console.log(count);
  };

  //! return count
  const showCount = () => {
    console.log(count);
  };

  // ! increment
  const increment = () => {
    count++;
    console.log(count);
  };

  //   return [increment, decrement, showCount];
  return {
    increment,
    decrement,
    showCount,
  };
};

const counter = Counter();
console.log(counter);
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.showCount();
// counter[0]();
// counter[0]();
// counter[0]();
// counter[0]();
///

//! closure
const counter =() => {
    let count="parent scope";
     
    return () => {
        console.log(count);
    }
}
const child=counter();
child();

const Counter =() => {
    let count=0;
     
    return () => {
        count++;
        console.log(count);
    }
}
const count=Counter();
const count1=Counter();
count();
count();
count();
count();
count1();
count1();


const Counter1 =() => {
    let count=0;
     
    const increment = ()=>{
        count++;
    }

    const decrement = ()=>{
        count--;
    }
    
    const print=()=>{
        console.log(count);
    }
    return {
        increment,decrement,print
    }

};
const c=Counter1();
c.increment();
c.increment();
c.decrement();
c.print();     
 
