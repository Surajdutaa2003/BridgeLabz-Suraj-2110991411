function countWords(text) {
    if (!text) return 0; // Handle empty or null input
    // Split text by spaces and filter out empty entries
    const words = text.trim().split(/\s+/);
    return words.length;
}

// Example usage
const text = "This is a sample text with some words.";
console.log(countWords(text)); // Output: 8
