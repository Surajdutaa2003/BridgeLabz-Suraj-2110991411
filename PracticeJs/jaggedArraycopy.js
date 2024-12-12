function deepCopyJaggedArray(jaggedArray) {
    var copy = [];
    
    for (var i = 0; i < jaggedArray.length; i++) {
        if (Array.isArray(jaggedArray[i])) {
            // If the element is an array, recursively copy it
            copy.push(deepCopyJaggedArray(jaggedArray[i]));
        } else {
            // If the element is not an array, directly copy the value
            copy.push(jaggedArray[i]);
        }
    }
    
    return copy;
}

// Example usage:
var jaggedArray = [
    [1, 2, [3, 4]],
    5,
    [[6, 7], 8],
    [9, [10, [11, 12]]]
];
var copiedArray = deepCopyJaggedArray(jaggedArray);

console.log(copiedArray);



copiedArray[0][0] = 100;  
console.log(jaggedArray[0][0]);  