const myPromise=new Promise(function(resolve,reject){
    console.log("Hi");
})

myPromise.then(function(value){
    console.log(value);
})