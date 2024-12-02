const paragraph = "This is a test. this is a paragraph";

// Remove punctuation, convert to lowercase, and split into words
const words = paragraph.toLowerCase().replace(/[^\w\s]/g, '').split(' ');

// Calculate word frequency using reduce
const wordFrequency = words.reduce((acc, word) => ({
    ...acc,
    [word]: (acc[word] || 0) + 1
}), {});

console.log(wordFrequency);
