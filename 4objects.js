const user1={
    name:"john",
    email: "john@gmail.com",
    address:{
        city: "kathmandu",
        country:"npl",
    },

};

const user2={
    name:"john",
    email:"john@gmail.com",
};

//optional chaining
console.log(user1.address.city);
console.log(user2.address?.city);

//null safety ??
console.log(user2.address?.city?? "city not found");
