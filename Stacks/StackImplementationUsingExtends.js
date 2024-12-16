class Stack extends Array {
    add(element) {
        this.push(element); // Use Array's push method to add an element
    }

    delete() {
        return this.pop(); // Use Array's pop method to remove and return the last element
    }


    peek() {
        return this[this.length - 1]; // Access the last element
    }
    

    isEmpty() {
        return this.length === 0; // Check if the stack is empty
    }

    print() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
        } else {
            console.log("Stack elements:", this.join(" -> "));
        }
    }

    clear() {
        this.length = 0; // Clear the array by setting its length to 0
    }

    size() {
        return this.length; // Return the current size of the stack
    }
}

// Example Usage
let stack = new Stack();

stack.add(10);  // Stack: [10]
stack.add(20);  // Stack: [10, 20]
stack.add(30);  // Stack: [10, 20, 30]

console.log(stack.peek());      // Output: 30 (Top of the stack)

console.log(stack.delete());    // Output: 30 (Removes 30, Stack: [10, 20])
console.log(stack.size());      // Output: 2 (Two elements remaining in the stack)

stack.print();                  // Output: Stack elements: 10 -> 20

stack.clear();                  // Clears the stack
console.log(stack.isEmpty());   // Output: true (Stack is empty)

stack.print();                  // Output: Stack is empty
