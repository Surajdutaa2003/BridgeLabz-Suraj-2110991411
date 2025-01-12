function hi(name ,callback){
    console.log("Inside greet function");
    callback(name);

}
function sayHello(name){
    console.log("Hello" + name + "!");
}
hi("Jhon",sayHello);