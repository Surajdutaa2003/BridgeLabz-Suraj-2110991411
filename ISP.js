// Base class
class Animal {
    eat() {
      console.log("Eating");
    }
  }
  
  // Derived class: Bird
  class Bird extends Animal {
    fly() {
      console.log("Flying");
    }
  }
  
  // Derived class: Dog
  class Dog extends Animal {
    bark() {
      console.log("Barking");
    }
  }
  
  // Usage
  const bird = new Bird();
  console.log("Bird:");
  bird.eat(); // Inherited from Animal
  bird.fly(); // Specific to Bird
  
  const dog = new Dog();
  console.log("\nDog:");
  dog.eat(); // Inherited from Animal
  dog.bark(); // Specific to Dog
  