// Violates LSP
class Bird {
    fly() {
      console.log("Flying");
    }
  }
  
  class Penguin extends Bird {
    fly() {
      throw new Error("Penguins can't fly");
    }
  }
  
  // Correct Implementation
  class Bird {
    move() {
      console.log("Moving");
    }
  }
  
  class FlyingBird extends Bird {
    fly() {
      console.log("Flying");
    }
  }
  
  class Penguin extends Bird {
    swim() {
      console.log("Swimming");
    }
  }
  