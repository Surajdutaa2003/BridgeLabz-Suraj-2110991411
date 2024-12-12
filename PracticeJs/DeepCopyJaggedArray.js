function deepCopyArray(arr) {
    var copy = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            copy.push(deepCopyArray(arr[i])); // Recursive call for nested arrays
        } else {
            copy.push(arr[i]); // Copy the primitive value
        }
    }
    return copy;
}


var jaggedArray = [1, [2, [3, 4]], 5];
var deepCopiedArray = deepCopyArray(jaggedArray);

console.log(deepCopiedArray); 

deepCopiedArray[1][1][0] = 99;
console.log(jaggedArray); // Original remains unchanged: [1, [2, [3, 4]], 5]
console.log(deepCopiedArray); // [1, [2, [99, 4]], 5]
