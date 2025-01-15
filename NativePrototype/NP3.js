String.prototype.reverse=function(){
   return this.split('').reverse().join();
}

let str="Hello";
console.log(str.reverse())