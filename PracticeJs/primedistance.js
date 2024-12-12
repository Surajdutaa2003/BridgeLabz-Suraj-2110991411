function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function firstNPrimes(n) {
    let primes = [];
    let num = 2;

    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    return primes;
}

function printPrimeDistances() {
    const primes = firstNPrimes(100);
    let distances = [];

    for (let i = 1; i < primes.length; i++) {
        distances.push(primes[i] - primes[i - 1]);
    }

    console.log("Prime Distances: ", distances);
}

// Call the function
printPrimeDistances();
