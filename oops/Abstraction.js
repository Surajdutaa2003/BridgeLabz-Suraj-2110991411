class Vehicle {
    start() {
      console.log("Starting the vehicle...");
    }
  }
  
  class Car extends Vehicle {
    start() {
      console.log("Starting the car with a key...");
    }
  }
  
  class Bike extends Vehicle {
    start() {
      console.log("Starting the bike with a kick...");
    }
  }
  
  const car = new Car();
  car.start(); // Output: Starting the car with a key...
  
  const bike = new Bike();
  bike.start(); // Output: Starting the bike with a kick...
  