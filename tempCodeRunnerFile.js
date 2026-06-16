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