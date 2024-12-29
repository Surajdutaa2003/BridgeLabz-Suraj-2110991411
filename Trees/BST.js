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

    // Display the binary tree (in-order traversal)
    display() {
        const result = [];
        this._inOrderTraversal(this.root, result);
        console.log(result.join(" "));
    }

    _inOrderTraversal(node, result) {
        if (node !== null) {
            this._inOrderTraversal(node.left, result);
            result.push(node.value);
            this._inOrderTraversal(node.right, result);
        }
    }
}

// Usage example:
const tree = new BinaryTree();
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(7);
tree.add(3);

tree.display(); // Output: 3 5 7 10 15
