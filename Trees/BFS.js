class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Add a node to the binary tree
    add(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this._addRecursive(this.root, newNode);
        }
    }

    _addRecursive(current, newNode) {
        if (newNode.value < current.value) {
            if (current.left === null) {
                current.left = newNode;
            } else {
                this._addRecursive(current.left, newNode);
            }
        } else {
            if (current.right === null) {
                current.right = newNode;
            } else {
                this._addRecursive(current.right, newNode);
            }
        }
    }

    // Breadth-First Search (Level-Order Traversal)
    bfsTraversal() {
        const result = [];
        if (this.root === null) {
            console.log("BFS Traversal: The tree is empty.");
            return;
        }

        const queue = [this.root]; // Initialize queue with the root node

        while (queue.length > 0) {
            const current = queue.shift(); // Remove the front node from the queue
            result.push(current.value); // Add its value to the result

            // Add its left and right children to the queue if they exist
            if (current.left !== null) queue.push(current.left);
            if (current.right !== null) queue.push(current.right);
        }

        console.log("BFS Traversal:", result.join(" "));
    }
}

// Usage example:
const tree = new BinaryTree();
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(7);
tree.add(3);

tree.bfsTraversal(); // Output: BFS Traversal: 10 5 15 3 7
