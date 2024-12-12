function asciiArrayToString(asciiArray) {
    return asciiArray.map(function(code) {
        return String.fromCharCode(code);
    }).join('');
}


console.log(asciiArrayToString([65, 66, 67])); // Output: "ABC"
