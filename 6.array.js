//! Array
//[]
// numbered index -> oth index

//! new keyword
const arr=new Array(8,4);

//! array literal
const numbers=[1,2,34,5,6];

//* reading elements
const ele=numbers[0];
console.log(ele);
console.log(numbers[4]);
console.log(arr,numbers);

//* adding new element
//? push
//arrname.push(item1,iitem2,.......) ->return length
//from end
numbers.push(12);

//from start
//? unshift()
//arrname.unshift(item1,iitem2,.......) ->return length
numbers.unshift(100,200);
console.log(numbers);


//* remove element
//! from end
//arrname.pop()
console.log(numbers);
numbers.pop();
console.log(numbers);
const res=numbers.pop();
console.log(res);

//! from start
//shift -> return removed elemnt
numbers.shift();
console.log(numbers);

//! length
//arrayname.length
console.log(numbers.length);//undefined
console.log(numbers.length-1);

//*search
//! arr.includes(el) -> return boolean
console.log(numbers.includes(2));
console.log(numbers.includes(20));

//!arr.indexOf(el) ->return index if not exist then -1
//arr.lastIndexOf(el)
console.log(numbers.indexOf(2));
console.log(numbers);

//!join array to string
console.log(numbers.join(","));