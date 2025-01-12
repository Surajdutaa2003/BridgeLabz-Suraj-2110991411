// Parent class for all birds
class Bird {
  move() {
    console.log("Moving");
  }
}

// FlyingBird inherits from Bird and can fly
class FlyingBird extends Bird {
  fly() {
    console.log("Flying");
  }
}

// Penguin inherits from Bird but swims instead of flying
class Penguin extends Bird {
  swim() {
    console.log("Swimming");
  }
}

// Create an object of FlyingBird and call its methods
const eagle = new FlyingBird();
console.log("Eagle:");
eagle.move();  // Output: Moving
eagle.fly();   // Output: Flying

// Create an object of Penguin and call its methods
const penguin = new Penguin();
console.log("\nPenguin:");
penguin.move();  // Output: Moving
penguin.swim();  // Output: Swimming