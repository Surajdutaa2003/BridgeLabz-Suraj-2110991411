const paragraph = "This is a test. this is a paragraph";

// Remove punctuation, convert to lowercase, and split into words
const words = paragraph.toLowerCase().replace(/[^\w\s]/g, '').split(' ');

// Calculate word frequency using reduce
const wordFrequency = words.reduce(function(acc, word) {
    if (acc[word]) {
        acc[word] = acc[word] + 1;
    } else {
        acc[word] = 1;
    }
    return acc;
}, {});

console.log(wordFrequency);
