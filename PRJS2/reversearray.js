// Using the reverse method
const array = [1, 2, 3, 4, 5];
const reversedArray = array.reverse();
console.log(reversedArray);  // Output: [5, 4, 3, 2, 1]

// Traditional method
function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const reversedArray1 = reverseArray(array1);
console.log(reversedArray1);  // Output: [5, 4, 3, 2, 1]
