function binaryToNumber(binaryString){
    return parseInt(binaryString,2);
}

var binaryString="1101";
var number=binaryToNumber(binaryString);
console.log(number);