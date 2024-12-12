function letterFrequency(str) {
    const frequency = {};

   
    for (let i = 0; i < str.length; i++) {
        const letter = str[i].toLowerCase(); // Convert to lowercase to handle case insensitivity
        if (/[a-z]/.test(letter)) { // Consider only alphabetic characters
            if (frequency[letter]) {
                frequency[letter]++;
            } else {
                frequency[letter] = 1;
            }
        }
    }

    
    const result = [];
    for (let letter in frequency) {
        result.push([letter, frequency[letter]]);
    }

    return result;
}


const str = "Hello World";
const frequencies = letterFrequency(str);
console.log(frequencies); 
