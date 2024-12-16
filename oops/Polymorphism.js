// Parent class
class Animal {
    speak() {
        console.log("The animal makes a sound.");
    }
}

// Child class
class Dog extends Animal {
    // Overriding the speak method
    speak() {
        console.log("The dog barks.");
    }
}

// Another child class
class Cat extends Animal {
    // Overriding the speak method
    speak() {
        console.log("The cat meows.");
    }
}

// Example usage
const animal = new Animal();
animal.speak(); // Output: The animal makes a sound.

const dog = new Dog();
dog.speak(); // Output: The dog barks.

const cat = new Cat();
cat.speak(); // Output: The cat meows.
