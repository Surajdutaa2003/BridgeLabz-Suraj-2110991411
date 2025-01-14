function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
var result =add(3)(5)(7);
console.log(result);