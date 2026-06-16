
//! promise
//state of promise
//1.pending
//2.fulfilled
//3.rejected
const promise=new Promise((resolve,reject)=>{
    //async task
    setTimeout(()=>{
        resolve({message:"sucess"});
        //reject({message:"error"});
    },3000);
});

console.log("start");
console.log(promise);

//! handling promise
let isLoading=true;
promise
.then((data)=>{
    console.log(data);
    console.log(promise);
})
.catch((error)=>{
    console.log("error");
    console.log(promise);
})
.finally(()=>{
       console.log("finally");
       console.log(promise);
});

console.log("end");


//---------------------------------------------------------------------------------------------

const promise=()=>{
   return new Promise((resolve,reject)=>{
    //async task
    setTimeout(()=>{
        resolve({message:"sucess"});
        //reject({message:"error"});
    },3000);
});
};

console.log("start");
console.log(promise());

//! handling promise
let isLoading=true;
promise()
.then((data)=>{
    console.log(data);
    console.log(promise());
})
.catch((error)=>{
    console.log("error");
    console.log(promise());
})
.finally(()=>{
       console.log("finally");
       console.log(promise);
});



const getUser=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error=true;
            if(error){
                reject({message:"user fetch failed"});
            }
            else{
                resolve({
                    _id:10,
                    name:"john doe",
                    email:"j@gmail.com",
                    password:"12345",
                });
            }
        },3000);
    });
};

// getUser()
// .then((user)=>{
//     console.log(user);
//     console.log(getUser());
// })
// .catch((error)=>{
//     console.log(error);
//     console.log(getUser());
// })
// .finally(()=>{
//        console.log("finally");
//        console.log(getUser());
// });


const getPost=(userId)=>{
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const error=false;
        if(error){
            reject({message:"posts fetch failed"});
        }
        else{
            resolve([
      {
        userId: userId, //right side j lekhe xha tehi parameter ma pass garne ho
        _id: 1,
        title: "Post 1",
      },
      {
        userId: userId,
        _id: 2,
        title: "Post 2",
      },
      {
        userId: userId,
        _id: 3,
        title: "Post 3",
      },
    ]);
}
    })
   })
};

const getComments = (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject({ message: "comments fetch failed" });
      } else {
        resolve([
          {
            _id: 1,
            postId: postId,
            text: "comment 1",
          },
          {
            _id: 2,
            postId: postId,
            text: "comment 2",
          },
          {
            _id: 3,
            postId: postId,
            text: "comment 3",
          },
        ]);
      }
    }, 2000);
  });
};

//!promise chaining

// getUser()
//   .then((user) => {
//     console.log(user);
//     return getPost(user._id);
//   })
//   .then((posts) => {
//     console.log(posts);
//     return getComments(posts[0]._id);
//   })
//   .then((comments) => {
//     console.log(comments);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


//! async function,async/await,try catch

const fetchData=async()=>{
 try{
  const user=await getUser();
  console.log(user);
  const posts=await getPost(user);
  console.log(posts);
  const comments=await getComments(posts[0]._id);
  console.log(comments);
 }
 catch(error){
  console.log(error);
 }
 finally{
  console.log("finally");
 }
};
fetchData();

//Promise chain handling for Api
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response)=>{
  return response.json();
})
.then((todo)=>{
  console.log(todo);
})
.catch((error)=>{
  console.log(error);
});


const fetching=async()=>{
  const x=await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(x);
   const x1=await x.json();
   console.log(x1);
};
fetching();


//https://jsonplaceholder.typicode.com/posts  =[]

//https://jsonplaceholder.typicode.com/comments?postId=1  =[]


const fetch1=async()=>{
  const x=await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(x);
  const x1=await x.json();
  console.log(x1);
   const y=await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${x1.id}`);
  console.log(y);
}
fetch1();



//fetch 
const fetchData = async () => {
  try {
    //* fetch posts
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    //* fetch comments
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${posts[10].id}`,
    );
    const comments = await resp.json();
    console.log(comments);
  } catch (error) {
    console.log(error);
  }
};
fetchData();
console.log("end");