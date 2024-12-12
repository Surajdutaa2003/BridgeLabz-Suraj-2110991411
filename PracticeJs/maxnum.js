var max = 0;
const a = [1, 2, 3, 4, 5, 6, 7, 8];
const maxValue = a.reduce(function(accumulator, currentValue) {
    if (accumulator > currentValue) {
        return accumulator;
    } else {
        return currentValue;
    }
}, 0);
console.log(maxValue);  // Output: 8
