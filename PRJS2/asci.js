function stringToAsciiArray(str) {
    return str.split('').map(function(char) {
        return char.charCodeAt(0);
    });
}


console.log(stringToAsciiArray("ABC")); // Output: [65, 66, 67]
