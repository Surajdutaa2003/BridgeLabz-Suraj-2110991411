class Stack {
    constructor() {
        this.item = [];
    }

    add(element) {
        this.item.push(element);
    }

    delete() {
        return this.item.pop(); // Return the removed element
    }

    peek() {
        return this.item[this.item.length - 1];
    }

    isEmpty() {
        return this.item.length === 0;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
        } else {
            console.log("Stack elements:", this.item.join(" -> "));
        }
    }

    clear() {
        this.item = [];
    }

    size() {
        return this.item.length;
    }
}

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
