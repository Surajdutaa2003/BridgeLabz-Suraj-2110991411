class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    run() {
        console.log(this.name + " is running");
    }
    shout() {
        console.log(this.name + " is barking!");
    } 
}

class Monkey extends Animal {
    eatBanana() {
        console.log(this.name + " is eating banana");
    }
    hide() {
        console.log(`${this.name} is hiding`); // Corrected with backticks
    }
}

let ani = new Animal("Bruno", "White");
let Mon = new Monkey("Jaggu", "Blue", 1); // Extra argument (1) is ignored

ani.shout(); // Output: Bruno is barking!
Mon.shout(); // Output: Jaggu is barking!
Mon.run();   // Output: Jaggu is running
Mon.eatBanana(); // Output: Jaggu is eating banana
Mon.hide();  // Output: Jaggu is hiding