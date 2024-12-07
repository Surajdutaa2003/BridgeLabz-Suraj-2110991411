class Stack {
    constructor() {
        this.item = []; // Initialize an empty array
    }

    // Add an element
    push(element) {
        this.item.push(element);
    }

    // Remove an element
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty"; // Handle underflow condition
        }
        return this.item.pop();
    }

    // Top element
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.item[this.item.length - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.item.length === 0;
    }

    // Size of the stack
    size() {
        return this.item.length;
    }

    // Clear the stack
    clear() {
        this.item = [];
    }

    // Print the stack elements
    printStack() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
        } else {
            console.log("Stack elements: ");
            for (let i = 0; i < this.item.length; i++) {
                console.log(this.item[i]); 
            }
        }
    }
}

let stack = new Stack();

stack.push(10);  // Stack: [10]
stack.push(20);  // Stack: [10, 20]
stack.push(30);  // Stack: [10, 20, 30]

console.log(stack.peek());      // Output: 30 (Top of the stack)

console.log(stack.pop());       // Output: 30 (Removes 30, Stack: [10, 20])
console.log(stack.size());      // Output: 2 (Two elements remaining in the stack)

stack.printStack();             // Output: Stack elements: 10 -> 20

stack.clear();                  // Clears the stack
console.log(stack.isEmpty());   // Output: true (Stack is empty)

stack.printStack();             // Output: Stack is empty
