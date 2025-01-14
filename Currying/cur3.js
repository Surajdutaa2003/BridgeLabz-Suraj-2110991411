function multiply(a) {
    return function (b) {
      return function (c) {
        return a * b * c;
      };
    };
  }
  
  // Usage
  var result = multiply(2)(3)(4); // 24
  console.log(result);
  