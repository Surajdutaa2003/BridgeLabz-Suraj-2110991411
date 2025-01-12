function operation(a,b,callback){
    console.log("operation done");
     return callback(a,b);
}

function add(x,y){

    return x+y;

}

function subtract(x,y){
    return x-y;
}

console.log( operation(3,5,add));