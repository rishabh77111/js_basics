//! array methods
//? push,pop,shift,unshift,at,includes,indexOf,lastIndexOf..

const numbers=[23,4,5,6,7];


//* forEach
//arr_name.forEach(callback)     nothing returns

const callback=(value,index,array)=>{
  console.log(value,index,array);   
};

numbers.forEach(callback);
const result=numbers.forEach(callback);

numbers.forEach(value,index,array);
numbers.forEach(_,index,array);

let doubled=[];
numbers.forEach((value,index,array)=>{
    console.log(index);
    doubled.push(val*2);
});


console.log(doubled);
//* map ---transform array
//arr.map
//return new array
const numbers=[23,4,5,6,7];
const double=numbers.map((val)=>{
   return val*2;
});
console.log(numbers);
console.log(double);


//* filter
//return new array
//Always give value
const numbers=[23,4,5,6,7];
const even=numbers.filter((val)=>{
   if(val%2==0){
    return val;//return true
   }
});

//corresponding arrow function
//const even=numbers.filter((val)=> val%2===0);
const odd=numbers.filter((val)=> val%2!==0);
console.log(even);
console.log(numbers);

//* reduce
//return single value
const numbers=[23,4,5,6,7];
const sum=numbers.reduce((acc,val)=>{
       return acc+=val;
},0);
console.log(sum);


const cart={
  user:{},
  items:[
    {product:{price:1000},quantity:12},
    {product:{price:100},quantity:10},
    {product:{price:1500},quantity:12},

  ],
};
const tsum=cart.items.reduce((acc,val)=>{
    console.log(val);
    return acc +=val.product.price * val.quantity;
},0);
console.log(tsum);


//* find
//searching
const numbers=[23,24,5,6,7];
const res=numbers.find((val)=>{
   if(val>20){
    return val; //return true lekhe ni return val nae garxha
   }
});
//const res=numbers.find((val)=>val>20);

console.log(res);


const cart={
  user:{},
  items:[
    {product:{id:1,price:1000},quantity:12},
    {product:{id:2,price:100},quantity:10},
    {product:{id:3,price:1500},quantity:12},

  ],
};
const find2=cart.items.find((val)=>{
    if(val.product.id==2){
      return val;
    }
},);
console.log(find2);

//* findIndex
//return index always

//* every/some 
//return boolean
console.log(numbers.every((val)=>val>2));
console.log(numbers.some((val)=>val>2));

//* sort
// [
//      4,23, 1, 5,
//    7, 101, 6
// ]
console.log(numbers);
numbers.sort((a, b) => {
  // return a - b;
  return b - a;
});

// +ve -> swap
// -ve -> no swap
// 0  -> no swap

console.log(numbers);