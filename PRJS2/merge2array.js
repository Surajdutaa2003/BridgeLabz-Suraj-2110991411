function mergeArrays(array1, array2) {
    return array1.concat(array2);
}

// Example usage:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray);  
function mergeArraysTraditional(array1, array2) {
    let mergedArray = [];

    for (let i = 0; i < array1.length; i++) {
        mergedArray.push(array1[i]);
    }

    for (let j = 0; j < array2.length; j++) {
        mergedArray.push(array2[j]);
    }

    return mergedArray;
}

// Example usage:
const array11 = [1, 2, 3];
const array21 = [4, 5, 6];
const mergedArray1 = mergeArraysTraditional(array11, array21);
console.log(mergedArray1);  // Output: [1, 2, 3, 4, 5, 6]

