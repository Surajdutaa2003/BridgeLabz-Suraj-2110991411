const arr = [5, 1, 6, 2, 4, 3];

for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]; // Store the current element
    let j = i;
    
    // Shift elements of the sorted subarray to the right to make space for temp
    while (j > 0 && arr[j - 1] > temp) {
        arr[j] = arr[j - 1];
        j = j - 1;
    }
    
    // Place temp in its correct position
    arr[j] = temp;
}

console.log(arr);
