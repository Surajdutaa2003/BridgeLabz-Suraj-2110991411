function greet(greeting) {
    return function (name) {
      return function (punctuation) {
        return greeting + ", " + name + punctuation;
      };
    };
  }
  
  // Usage
  var greetUser = greet("Hello")("John")("!");
  console.log(greetUser); // Output: "Hello, John!"
  