class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Node add karne ka function
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

    // Depth-First Search (Iterative)
    dfsTraversalIterative() {
        if (this.root === null) {
            console.log("DFS Traversal: Tree is empty.");
            return;
        }

        const stack = [this.root]; // Root node ko stack mein daalo
        const result = [];

        while (stack.length > 0) {
            const current = stack.pop(); // Stack ke top se node nikalo
            result.push(current.value); // Node ko visit karo

            // Pehle right child ko stack mein daalo, phir left ko
            if (current.right !== null) stack.push(current.right);
            if (current.left !== null) stack.push(current.left);
        }

        console.log("DFS Traversal (Iterative):", result.join(" "));
    }
}

// Usage Example
const tree = new BinaryTree();
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(7);
tree.add(3);

tree.dfsTraversalIterative(); // Output: DFS Traversal (Iterative): 10 5 3 7 15
