function factorial(n) {
    let result = 1n; 
    for (let i = 1n; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Calculate 70!
const result = factorial(70n); 
console.log(result.toString());
