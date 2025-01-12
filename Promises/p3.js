const p1=new Promise(function(resolve,reject){
    resolve(4);
})

p1.then(function(message){
    message=message*4;
    console.log(message);
    return message
}).then(function(message){
    message=message*5;
    console.log(message);
    return message;
}).then(function(message){
    message=message/5;
    console.log(message);
})