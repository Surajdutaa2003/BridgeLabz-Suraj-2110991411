function sumJaggedArray(jaggedArray) {
    var sum = 0;
    
    for (var i = 0; i < jaggedArray.length; i++) {
        if (Array.isArray(jaggedArray[i])) {
           
            sum += sumJaggedArray(jaggedArray[i]);
        } else if (typeof jaggedArray[i] === 'number') {
            
            sum += jaggedArray[i];
        }
    }
    
    return sum;
}


var jaggedArray = [
    [1, 2, [3, 4]],
    5,
    [[6, 7], 8],
    [9, [10, [11, 12]]]
];
var totalSum = sumJaggedArray(jaggedArray);
console.log(totalSum);  // Output: 78
