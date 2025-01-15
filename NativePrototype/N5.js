Function.prototype.defer = function(ms){
    setTimeout(this,ms);
};

function sayHi(){
    console.log("Hi!");
}
sayHi.defer(2000);