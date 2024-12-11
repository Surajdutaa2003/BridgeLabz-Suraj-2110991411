const str = "hello";
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr); 
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

// Example usage:
const str1 = "hello";
const reversedStr1 = reverseString(str1);
console.log(reversedStr1);  // Output: "olleh" 


