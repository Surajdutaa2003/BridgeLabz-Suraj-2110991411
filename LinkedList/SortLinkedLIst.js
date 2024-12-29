class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a new node to the list
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Get the size of the linked list
    size() {
      let count = 0;
      let current = this.head;
      while (current) {
        count++;
        current = current.next;
      }
      return count;
    }
  
    // Bubble sort using two for loops
    bubbleSort() {
      const n = this.size();
      for (let i = 0; i < n - 1; i++) {
        let current = this.head;
        for (let j = 0; j < n - 1 - i; j++) {
          if (current.value > current.next.value) {
            // Swap values
            const temp = current.value;
            current.value = current.next.value;
            current.next.value = temp;
          }
          current = current.next;
        }
      }
    }
  
    // Print the linked list
    printList() {
      let current = this.head;
      const result = [];
      while (current) {
        result.push(current.value);
        current = current.next;
      }
      console.log(result.join(" -> "));
    }
  }
  
  // Example usage
  const list = new LinkedList();
  list.append(7);
  list.append(4);
  list.append(2);
  list.append(3);
  list.append(1);
  
  
  console.log("Before sorting:");
  list.printList();
  
  list.bubbleSort();
  
  console.log("After sorting:");
  list.printList();
  