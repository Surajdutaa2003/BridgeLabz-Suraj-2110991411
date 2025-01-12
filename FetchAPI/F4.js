fetch("https://api.adviceslip.com/advice")
.then(function(response){
    if(!response.ok){
        throw new Error("error in Api"+response.status);
    }
    return response.json();
    }).then(function(data){
    console.log(data.slip.advice);

}).catch(function(error){
    console.log("error caught",error);
})