p1=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("p1 resolve");
    },1000)
})

p2=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("p2 resolve");
    },2000)

})

p3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("p3 resolve");
    },3000)
})
Promise.all([p1,p2,p3]).then(function(result){
    console.log(result);
})
