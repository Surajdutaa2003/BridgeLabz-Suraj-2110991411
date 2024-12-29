class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0; // To track the size of the linked list
    }

    add(value) {
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
        this.length++;
    }

    insertAtBeginning(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insertAtEnd(value) {
        this.add(value);
    }

    insertAt(idx, value) {
        const newNode = new Node(value);

        if (idx === this.length) { // Insert at the end
            this.insertAtEnd(value);
            return;
        } else if (idx === 0) { // Insert at the beginning
            this.insertAtBeginning(value);
            return;
        } else if (idx > this.length || idx < 0) { // Invalid index
            console.error("Index out of bounds");
            return;
        }

        let temp = this.head;
        for (let i = 1; i <= idx - 1; i++) {
            temp = temp.next;
        }

        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
    }

    print() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join('->'));
    }
}

const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.insertAtBeginning(5);
list.insertAt(2, 15); // Insert 15 at index 2
list.insertAt(0, 0);  // Insert 0 at index 0 (beginning)
list.insertAt(5, 35); // Insert 35 at the end
list.print();