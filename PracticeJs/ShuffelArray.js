function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
       
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr; 
}

// Example usage
const strArray = ["apple", "banana", "cherry", "date", "elderberry"];
const shuffledArray = shuffleArray(strArray);

console.log(shuffledArray); 
