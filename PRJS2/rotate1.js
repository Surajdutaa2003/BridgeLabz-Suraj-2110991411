function rotateLeft(arr) {
    if (arr.length === 0) return arr; // Handle empty array
    let firstElement = arr.shift();  // Remove the first element
    arr.push(firstElement);          // Add it to the end
    return arr;
}

// Example
let arrayLeft = [1, 2, 3, 4, 5];
console.log(rotateLeft(arrayLeft)); // Output: [2, 3, 4, 5, 1]
