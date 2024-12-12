function getWordsFromText(text) {
    if (!text) return [];
    return text.match(/\b\w+\b/g) || [];
}


console.log(getWordsFromText("This is a sample text.")); // Output: ["This", "is", "a", "sample", "text"]
