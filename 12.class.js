//! class
// const person={
//     name:"john",
//     email:"john@gmail.com",
// };

// const person1={
//     name:"john",
//     email:"john@gmail.com",
// };

class Person{
    name;   //key   properties: name:rk that is key value pair
    email;
    #password;
    
    constructor(name,email,password){
        this.name=name;      //this.name points to key: name
        this.email=email;
        this.#password=password;

    }

    getPassword(){
        return this.#password;
    }
    introduce(){
        console.log("this is person class");
    }
};
 const john=new Person('john','john@gmail.com','12345');
 //john.introduce();
// console.log(john.getPassword());
// const ram=new Person('Ram','ram@gmail.com','12345');
// console.log(ram);
// console.log(ram.email);

//-->   Acess modifier: in js 2: public, private(access within class)

//* Inheritance    ->>>Multiple inheritance not possinle in js  
class Student extends Person{
    //super() -> 
    // faculty;
    // roll;
    // year;

    constructor(name,email,password,faculty,roll,year){
        super(name,email,password);
        this.faculty=faculty;
        this.roll=roll;
        this.year=year;
    }
     introduce(){
        console.log("this is Student class");
    }
};
const student1=new Student('abc','abc@gmail.com','1234','sci','21','2026');
console.log(student1);
console.log(student1.getPassword());
// console.log(student1.introduce());
student1.introduce();

//! abstraction

class CofeeMaker{
    makeCofee(){
    //start
    this.#start();
    //water heat
    this.#heatWater();
    //cofee ready
    this.#dispatch();
    }

    #start(){
        console.log("starting");
    }

    #heatWater(){
        console.log("Heating ")
    }
    #dispatch(){
        console.log("cofee is ready");
    }
    
}
const cm=new CofeeMaker();
cm.makeCofee();

//cm
//cm.start()
//cm.heat()
//cm.ready()
//---- static,getter/setter,this.keyword,
//Account calls--intial amnt,acc name,-> acc deposit(),withdraw(),get_details()


class BankDetails{
    // account_name;
    // account_number;
    // initial_balance;

    constructor(account_name,account_number,initial_balance){
        this.account_name=account_name;
        this.account_number=account_number;
        this.initial_balance=initial_balance;
    }

    amount_deposit(amount){
        this.initial_balance+=amount;
    }
     amount_withdraw(amount){
        this.initial_balance-=amount;
    }
    account_getDetails(){
        console.log(this.account_name, this.initial_balance);   
    }
}
const p1=new BankDetails("Rishabh",12345,0);
console.log(p1);
p1.amount_deposit(100000);
p1.account_getDetails();
