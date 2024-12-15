function getWordsFromTextUsingSplit(text) {
    if (!text) return [];
    return text.split(/\W+/).filter(Boolean);  // Split by non-word characters and filter out empty strings
}

console.log(getWordsFromTextUsingSplit("This is a sample text.")); 
// Output: ["This", "is", "a", "sample", "text"]
