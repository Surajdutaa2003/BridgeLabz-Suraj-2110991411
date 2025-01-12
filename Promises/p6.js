const p1=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("p1 resolved");
    },1000)
})

const p2=new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("p2 rejected");
    },2000)
})

const p3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("p3 resolved");
    },3000)
})
const p4 =new Promise (function(resolve,reject){
    setTimeout(function(){
        resolve("p4 is resolved");
    },4000)
})
const p5=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("p5 is resolve")
    },5000)
})

Promise.race([p1,p2,p3,p4,p5]).then(function(result){
    console.log("Promise.race winner: ", result);
})
