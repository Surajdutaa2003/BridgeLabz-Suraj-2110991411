// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class Person {
    #age; // Private field
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }

    // Getter for age
    getAge() {
        return this.#age;
    }

    // Setter for age with validation
    setAge(age) {
        if (age > 0) {
            this.#age = age;
        } else {
            console.log("Age must be positive");
        }
    }
}

// Create a new person object
const pers = new Person("Ravi", 12);
console.log(pers.getAge()); // Prints: 12

pers.setAge(30); // Updates age
console.log(pers.getAge()); // Prints: 30

console.log("Try programiz.pro"); // Prints: Try programiz.pro
