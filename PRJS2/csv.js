function csvToArray(csvText) {
    return csvText.split('\n').map(function(row) {
        return row.split(',');
    });
}

const csvText = "name,age,city\nJohn,25,New York\nJane,30,Los Angeles";
console.log(csvToArray(csvText));

