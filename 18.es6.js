//es6
//ECMA Script 6 -->2015

//* let const
//* template  literal
//*arrow function
//* enhanced object literals

let name="john";
let key="email";


function add(...params){
    console.log(params);
    let arr=params;
  
    let sum=arr.reduce((acc,val)=>{
      return acc+val;
      
    },0)
    return sum;
}
//add(1,45,6,7,8);
console.log(add(1,45,6,7,8));

function add(...params){
    return params.reduce((acc,val)=>{
        return acc + val;
    },0);
}

console.log(add(1,45,6,7,8));