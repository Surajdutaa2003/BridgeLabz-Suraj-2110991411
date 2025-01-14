function isDivisibleBy(divisor) {
    return function (number) {
      return number % divisor === 0;
    };
  }
  
  // Usage
  var isDivisibleBy3 = isDivisibleBy(3);
  console.log(isDivisibleBy3(9)); // true
  console.log(isDivisibleBy3(10)); // false
  