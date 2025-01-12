fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response){
    if(!response.ok){
        throw new Error("Http Error" + response.status);
    }
    return response.json();
})
.then(function(data){
for(var i=0;i<data.length;i++){
    console.log(data[i].title);
}
}).catch(function(error){
    console.log("error caught",error);
})