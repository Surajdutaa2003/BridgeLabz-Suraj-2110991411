new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("resolve 1");
    },1000)
}).then(function(message){
    console.log(message);
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("resolve 2");
        },2000)
    })
})
.then(function (message) {
    console.log(message);
     return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("resolve 3");
        }, 3000);
    });
})
.then(function(message){
    console.log(message);
})