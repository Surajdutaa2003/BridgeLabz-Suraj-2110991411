function generateUniqueRandomNumbers(n) {
    // Create an array with numbers from 1 to n
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

   
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }

    
    return arr.slice(0, n);
}


const n = 5;
const randomNumbers = generateUniqueRandomNumbers(n);
console.log(randomNumbers); // Output: A shuffled array of unique random numbers, e.g. [3, 1, 5, 4, 2]
