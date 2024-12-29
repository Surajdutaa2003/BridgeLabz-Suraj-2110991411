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

    // Calculate the size of the tree
    size() {
        return this._calculateSize(this.root);
    }

    _calculateSize(node) {
        if (node === null) {
            return 0;
        }
        return 1 + this._calculateSize(node.left) + this._calculateSize(node.right);
    }

    // Find the maximum value in the tree
    findMax() {
        return this._findMaxRecursive(this.root);
    }

    _findMaxRecursive(node) {
        if (node === null) {
            return -Infinity;
        }

        const leftMax = this._findMaxRecursive(node.left);
        const rightMax = this._findMaxRecursive(node.right);

        return Math.max(node.value, leftMax, rightMax);
    }

    // Calculate the sum of all nodes in the tree
    sum() {
        return this._calculateSum(this.root);
    }

    _calculateSum(node) {
        if (node === null) {
            return 0;
        }

        const leftSum = this._calculateSum(node.left);
        const rightSum = this._calculateSum(node.right);

        return node.value + leftSum + rightSum;
    }

    // Calculate the height of the tree
    height() {
        return this._calculateHeight(this.root);
    }

    _calculateHeight(node) {
        if (node === null) {
            return -1; // Null nodes have height -1
        }

        const leftHeight = this._calculateHeight(node.left); // Height of left subtree
        const rightHeight = this._calculateHeight(node.right); // Height of right subtree

        return 1 + Math.max(leftHeight, rightHeight); // Current height = 1 + max(left, right)
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
console.log("Size of the tree:", tree.size()); // Output: Size of the tree: 5
console.log("Maximum value in the tree:", tree.findMax()); // Output: Maximum value in the tree: 15
console.log("Sum of all nodes in the tree:", tree.sum()); // Output: Sum of all nodes in the tree: 40
console.log("Height of the tree:", tree.height()); // Output: Height of the tree: 2
