function rotateRight(arr) {
    if (arr.length === 0) return arr; // Handle empty array
    let lastElement = arr.pop();     // Remove the last element
    arr.unshift(lastElement);        // Add it to the front
    return arr;
}

// Example
let arrayRight = [1, 2, 3, 4, 5];
console.log(rotateRight(arrayRight)); // Output: [5, 1, 2, 3, 4]
