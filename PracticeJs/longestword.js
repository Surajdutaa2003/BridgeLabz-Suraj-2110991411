const str = "Hi Hello how are you"; // Define the string first

const maxLength = str.split(" ").reduce(function(acc, word) {
    if (word.length > acc) {
        acc = word.length; // Update acc if the current word's length is greater
    }
    return acc; // Always return the accumulator
}, 0); // Start with 0 as the initial value

console.log(maxLength); // Output: 5 (the longest word is "Hello")
