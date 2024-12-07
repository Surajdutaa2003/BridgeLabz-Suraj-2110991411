function rev(num) {
    // Base case: if n is 0 or 1, return 1 (factorial of 0 and 1 is 1)
    if (n === 0) {
        return 1;
    }
    // Recursive case: factorial of n is n * factorial of (n-1)
    let y= num * rev(n - 1);
    console.log(y)
    return y
}

// Example usage:
console.log(rev(5));  // Output: 120 (5 * 4 * 3 * 2 * 1)
console.log(rev(0));  // Output: 1 (Base case)
