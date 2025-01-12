function delayPromise(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("promise Done");
        },2000);
    })
}

delayPromise().then(function(message){
    console.log(message);
})