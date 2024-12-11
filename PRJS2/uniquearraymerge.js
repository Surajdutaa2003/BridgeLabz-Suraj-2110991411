function unionArrays(arr1, arr2) {
    // Create a new array to store the union
    let unionArray = [];
    
    // Add all elements from arr1
    for (let i = 0; i < arr1.length; i++) {
        if (!unionArray.includes(arr1[i])) {
            unionArray.push(arr1[i]);
        }
    }

    // Add all elements from arr2
    for (let j = 0; j < arr2.length; j++) {
        if (!unionArray.includes(arr2[j])) {
            unionArray.push(arr2[j]);
        }
    }

    return unionArray;
}

// Example usage:
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const result = unionArrays(array1, array2);
console.log(result);  // Output: [1, 2, 3, 4, 5, 6]
