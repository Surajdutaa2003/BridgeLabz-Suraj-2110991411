class CustomArray {
    constructor(arr) {
      this.arr = arr;
    }
  
    // Method to calculate the sum of elements in the array
    getSum() {
      return this.arr.reduce((acc, num) => acc + num, 0);
    }
  
    // Helper method to check if a number is prime
    isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    // Method to get all prime numbers in the array
    getPrimeNumbers() {
      return this.arr.filter(this.isPrime);
    }
  
    // Method to calculate the average of elements in the array
    getAverage() {
      return this.getSum() / this.arr.length;
    }
  
    // Method to get the maximum element in the array
    getMax() {
      return Math.max(...this.arr);
    }
  
    // Method to get the minimum element in the array
    getMin() {
      return Math.min(...this.arr);
    }
  }
  
  // Example usage:
  const arr = new CustomArray([3, 5, 7, 2, 11, 4, 17]);
  
  console.log("Sum:", arr.getSum());
  console.log("Prime Numbers:", arr.getPrimeNumbers());
  console.log("Average:", arr.getAverage());
  console.log("Max Element:", arr.getMax());
  console.log("Min Element:", arr.getMin());
  