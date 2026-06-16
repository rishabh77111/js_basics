//! this -> {}

console.log(this);//filr(module).exports ={}

function a(){
    console.log(this);
}

a();  //this - global object

let user={
    name:"john doe",
    email:"john@gmail.com",
    // getName: ()=>{
    //     console.log(this.name);   //arrow ko afno this hudaena parents ko linxha
    // }

    //getName: function(){
    // const a=()=>{
    //     console.log(this); // output:{name:"john doe",email:"john@gmail.com"}
    // }}
    //a();
    //}
    //};

     getName: function (){
        console.log(this.name);
    }
}
//user.getName(); //this =user

let user={
    name:"john doe",
    email:"john@gmail.com",
    getName:function(){
        console.log(this.name); //context loose by function
    }
}
const fn=user.getName;
fn();  //global object 


class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    getName(){
        console.log(this.name);
    }
}
const u=new user("john","j@gmail.com");

//this -{}
//{name:john}
u.getName();

//* function object

//! call, apply and bind

function introduce(){
    console.log("this is ",this.name);
}
let user={
    name:"john Doe",
    email:"john@gmail.com"
}
introduce.call(user);
introduce.apply(user);


function introduce(age,email){
    console.log("this is ",this.name,age,email);
}
let user={
    name:"john Doe",
    email:"john@gmail.com"
}
introduce.call(user,10,"j@gmail.com");
introduce.apply(user,[12,"j@gmail.com"]);

//! bind
const fn=introduce.bind(user);
fn(12,"a@gmail.com");


//! not needed i did as to understand call,apply, bind  by myself

function introduce() {
  console.log(this.name);
}
const user = { name: "John" };
introduce.call(user);
