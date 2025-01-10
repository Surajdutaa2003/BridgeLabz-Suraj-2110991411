const p1=new Promise(function (resolve,reject){
    reject("promise rejected");
})
p1.then(function(value){
    console.log(value);
}).catch(function(error){
    console.log("Error: ",error);
})