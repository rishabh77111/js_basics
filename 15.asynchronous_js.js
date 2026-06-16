function checkInventory(callback){
     setTimeout(()=>{
        console.log("checking the inventory....");
        callback();
    },2000);
}

function createOrder(callback){
    setTimeout(()=>{
        console.log("creating an order....");
        const error=new Error("order creation failed");
        callback(error);
    },1000);
}

function chargePayment(callback){
     setTimeout(()=>{
        console.log("charging the payment...");
        let error=null;
        let chargedAmount=100;
        callback(error,chargedAmount);  //*first parameter always error then any other for callback function
    },2000);
}

function sendInvoice(callback){
     setTimeout(()=>{
        console.log("Sending the invoice....");
        callback();
    },1000);
}

function main(){
    //* callback hell
    checkInventory(()=>{
       // console.log("Inventory done!");
       createOrder((error)=>{
        if(error){
            console.log(error);
        }
        chargePayment((error,chargedAmount)=>{
            if(error){
                console.log("handling the error");
                return;
            }
            console.log(chargedAmount);
           sendInvoice(()=>{
            console.log("all done");
           }); 
        });
       });
    });
    
    // chargePayment();
    // sendInvoice();
    console.log('other request processing');
}
main();


//-----------------------------------------------------------------------------------------------------------------
//kti time paxi response aauxha not fixed then use promise
// it is solution for callback hell
function checkInventory(){
    const promise=new Promise((resolve,reject)=>{
         setTimeout(()=>{
        //console.log("checking the inventory....");
        let inStock=4;
         resolve(inStock);
        //reject(new Error('failed to check inventory'));
    },2000);
    });
    return promise;
}

function createOrder(){
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("creating an order....");
        //const error=new Error("order creation failed");
        //resolve();
        reject(new Error('failed to create an order'));
        },1000);
    
    });
    return promise;

}

function chargePayment(){
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("charging the payment...");
        //let error=null;
        let chargedAmount=100;
        resolve();
    },2000);
    });
    return promise;
}

function sendInvoice(){
    const promise=new Promise((resolve,reject)=>{
         setTimeout(()=>{
        console.log("Sending the invoice....");
        
    },1000);
    });
     return promise;
    
}

function main(){
    // checkInventory()
    // .then(()=>{  //() : isme ye data write jo resolve me pass karenge
    //     console.log("inventory done");
    // })

    // checkInventory()
    // .catch((err)=>{
    //     console.log('err',err);
    // })
    // .then(createOrder)
    // .catch((err)=>{
    //     console.log('err',err);
    // })
    // .then(chargePayment)
    // .then(sendInvoice);




    //* await async ----is sugar syntax
    //thread k bahar jaake wait kareka
    //jab tak hmara promise resolve nahi hota toh wait karta hai bahr jake

    const inStock=await checkInventory();
    console.log('instock',inStock);
    await createOrder;
    await chargePayment;
    await sendInvoice;

    //for error handile
    try{
        const inStock=await checkInventory();
        await createOrder;
        await chargePayment;
        await sendInvoice;
    }
    catch(err){
        console.log('Err',err);
    }
}

main();