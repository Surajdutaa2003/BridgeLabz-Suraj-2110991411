class Queue {
    constructor() {
        this.items = [];
    }

    // Enqueue: Add an element at the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Dequeue: Remove and return the front element from the queue
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        return this.items.shift();  // Removes the first element
    }

    // Peek: Return the front element without removing it
    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        return this.items[0];
    }

    // IsEmpty: Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Print: Print the elements in the queue
    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            console.log("Queue elements:", this.items.join(" <- "));
        }
    }

    // Clear: Clear all elements in the queue
    clear() {
        this.items = [];
    }

    // Size: Return the number of elements in the queue
    size() {
        return this.items.length;
    }
}

// Example usage
let queue = new Queue();

queue.enqueue(10);  // Queue: [10]
queue.enqueue(20);  // Queue: [10, 20]
queue.enqueue(30);  // Queue: [10, 20, 30]

console.log(queue.peek());       // Output: 10 (Front of the queue)

console.log(queue.dequeue());    // Output: 10 (Removes 10, Queue: [20, 30])
console.log(queue.size());       // Output: 2 (Two elements remaining in the queue)

queue.print();                   // Output: Queue elements: 20 <- 30

queue.clear();                   // Clears the queue
console.log(queue.isEmpty());    // Output: true (Queue is empty)

queue.print();                   // Output: Queue is empty
 