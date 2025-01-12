async function fetchData(){
try{
    var response=await fetch("https://jsonplaceholder.typicode.com/todos/1")
    var data =await response.json();
    console.log(data);
}
catch (error){
console.log("Error",error);
}
}
fetchData();