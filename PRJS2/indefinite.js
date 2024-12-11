function addLargeNumbers(num1, num2) {
    let result = "";
    let carry = 0;

    // Make both strings of equal length by padding with zeros
    while (num1.length < num2.length) num1 = "0" + num1;
    while (num2.length < num1.length) num2 = "0" + num2;

    // Iterate from the end to the start of the strings
    for (let i = num1.length - 1; i >= 0; i--) {
        let sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        result = (sum % 10) + result; // Append the last digit to the result
        carry = Math.floor(sum / 10); // Calculate the carry
    }

    // Add remaining carry, if any
    if (carry > 0) {
        result = carry + result;
    }

    return result;
}

// Example usage
let num1 = "987654321987654321";
let num2 = "123456789123456789";
console.log(addLargeNumbers(num1, num2)); // Output: "1111111111111111110"
