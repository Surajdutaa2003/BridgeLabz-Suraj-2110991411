function extractColumn(matrix, columnIndex) {
    var column = [];
    for (var i = 0; i < matrix.length; i++) {
        column.push(matrix[i][columnIndex]);
    }
    return column;
}

// Example usage:
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var columnIndex = 1;  // Extract the second column (index starts at 0)
var column = extractColumn(matrix, columnIndex);
console.log(column);  // Output: [2, 5, 8]
