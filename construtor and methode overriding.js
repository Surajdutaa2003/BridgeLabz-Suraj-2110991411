class Employee {
    constructor(name) {
      console.log(`${name} - Employee's constructor is here`); // Fixed with backticks
      this.name = name;
    }
    login() {
      console.log("Employee has logged in");
    }
  
    logout() {
      console.log("Employee has logged out");
    }
  
    requestLeaves(leaves) {
      console.log(`Employee has requested ${leaves} leaves - Auto approved`); // Fixed with backticks
    }
  }
  
  class Programmer extends Employee {
    constructor(name) {
      super(name); // Calls the parent class constructor
      this.name = name; 
      console.log("This is a newly written constructor");
    }
  
    requestCoffee(x) {
      console.log(`Employee has requested ${x} coffees`); 
    }
  
    requestLeaves(leaves) {
      super.requestLeaves(`${leaves + 1}`); // Calls the parent class method with modified value
      console.log("One extra is granted");
    }
  }
  
  let e = new Programmer("Harry");
  e.login();          // Output: Employee has logged in
  e.requestLeaves(3); // Output:
                      // Employee has requested 4 leaves - Auto approved
                      // One extra is granted
  