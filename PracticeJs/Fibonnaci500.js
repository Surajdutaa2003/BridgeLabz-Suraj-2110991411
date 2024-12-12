function fibonacci(n) {
    let a = 0n, b = 1n; 
    for (let i = 0; i < n; i++) {
        let temp = a;
        a = b;
        b = a + temp;
    }
    return a;
}


const result = fibonacci(500);
console.log(result.toString()); // Output the result as a string
