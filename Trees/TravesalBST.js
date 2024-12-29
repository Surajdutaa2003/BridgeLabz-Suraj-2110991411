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

    // In-Order Traversal (Left, Root, Right)
    inOrderTraversal() {
        const result = [];
        this._inOrder(this.root, result);
        console.log("In-Order Traversal:", result.join(" "));
    }

    _inOrder(node, result) {
        if (node !== null) {
            this._inOrder(node.left, result);
            result.push(node.value);
            this._inOrder(node.right, result);
        }
    }

    // Pre-Order Traversal (Root, Left, Right)
    preOrderTraversal() {
        const result = [];
        this._preOrder(this.root, result);
        console.log("Pre-Order Traversal:", result.join(" "));
    }

    _preOrder(node, result) {
        if (node !== null) {
            result.push(node.value);
            this._preOrder(node.left, result);
            this._preOrder(node.right, result);
        }
    }

    // Post-Order Traversal (Left, Right, Root)
    postOrderTraversal() {
        const result = [];
        this._postOrder(this.root, result);
        console.log("Post-Order Traversal:", result.join(" "));
    }

    _postOrder(node, result) {
        if (node !== null) {
            this._postOrder(node.left, result);
            this._postOrder(node.right, result);
            result.push(node.value);
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

tree.inOrderTraversal(); // Output: In-Order Traversal: 3 5 7 10 15
tree.preOrderTraversal(); // Output: Pre-Order Traversal: 10 5 3 7 15
tree.postOrderTraversal(); // Output: Post-Order Traversal: 3 7 5 15 10
