//! event loop
//* call stack
//*web apis: timer, dom events, fetch, promise:{state:pending,onResolve:(){},onReject,finally:(){}} ,geolocation
//*task queue --FIFO
//? 1. call back queue/macro task queue  --timer,dom events
//? 2. micro task queue          --fetch,promise
//* event loop --looping mechanism if call stack free then take task from task queue and push in call stack

console.log("a");
console.log("b");

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


const timer_id=setTimeout(()=>{
    console.log("processing");
},2000);
console.log("c");