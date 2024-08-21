// https://leetcode.com/problems/evaluate-boolean-binary-tree/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearch {
    constructor() {
        this.root = null;
    }

    transver(node, parent) {
        if (!node) return
        if (node.val === parent) return node;

        return this.transver(node.left, parent) || this.transver(node.right, parent)

    }

    insert(parent, val) {
        let newNode = new TreeNode(val);
        if (!this.root) this.root = newNode;
        else {
            let node = this.transver(this.root, parent);
            if (node.left) node.right = newNode;
            else node.left = newNode;
        }
    }

    get() {
        return this.root;
    }
}
// Create tree
let root = new BinarySearch();
root.insert(null, 5);
root.insert(5, 1);
root.insert(5, 7)
// root.insert(3, 2)
// root.insert(3, 4)
// root.insert(2, 1)
// root.insert(6, null)
// root.insert(6, 8)
// root.insert(8, 7)
// root.insert(8, 9)


let newTree = null, prev = null;
var evaluateTree = function (root) {
    // if (root.val == 1) return true;
    // else if (root.val == 0) return false;
    // else if (root.val == 2) return (evaluateTree(root.left) || evaluateTree(root.right));
    // else if (root.val == 3) return (evaluateTree(root.left) && evaluateTree(root.right));
    // return false;
    if (!root) return newTree;


    evaluateTree(root.left);
    if (!newTree && root.val) {
        newTree = new TreeNode(root.val);
        prev = newTree
    } else if (root.val) {
        prev.right = new TreeNode(root.val);
        prev = prev.right
    }
    evaluateTree(root.right);
    return newTree

};





const result = evaluateTree(root.get());

console.log(JSON.stringify(result, null, 5));


