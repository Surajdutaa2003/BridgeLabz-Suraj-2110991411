function str(str1){
    return function(str2){
        return function(str3){
            return str1 +" " + str2+" "+str3;
        }
    }
}
var result =str("I")("Love")("Coding");
console.log(result);