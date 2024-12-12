function sumJaggedArray(jaggedArray) {
    var sum = 0;
    for (var i = 0; i < jaggedArray.length; i++) {
        for (var j = 0; j < jaggedArray[i].length; j++) {
            sum += jaggedArray[i][j];
        }
    }
    return sum;
}

// Example usage:
var jaggedArray = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];
var totalSum = sumJaggedArray(jaggedArray);
console.log(totalSum);  
