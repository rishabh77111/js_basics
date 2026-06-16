//!hoisting  ---important
//var x;

console.log(x);  //hoist hunxha   //hoist vyo kina ki x katai xha so it hoist as undefined

var x=10;
//x=10;

console.log(x);

//* function declaration -> completely  hoisted
hoist();  
function hoist(){
    console.log("hoist");
}
hoist();

//

//* function expression
a();// typeerrors: a is not function //undefined();

var a=function(){
    console.log(a);
};

b();
var b=()=>{
    console.log("b");
}

c(); //const and var //cannot access c before intialization //hoist hunxha kaha temporal dead zone(TDZ)-> variable declare to variable intialization gap is TDZ
const c=()=>{   
    console.log("c");
}

//?difference between let, const & var
//* declaration:
//*scope:
//* hoisting:

//aru language ma hoist hudaena

var x=10;
//!memory creation phase: scan top to bottom, memory allocation,{x:undefined},hoist:(){},
//!execution phase: code execute,memory intialization ,{x:10},hoist:(){} //ignore hoist funnction just goes to call
