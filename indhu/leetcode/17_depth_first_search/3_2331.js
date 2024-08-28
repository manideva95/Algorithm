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

    transver(node) {
        let queue = [node];

        while (queue.length) {
            let tempNode = queue.shift();
            if (!tempNode.left || !tempNode.right) {
                return tempNode
            }
            if (tempNode.left) queue.push(tempNode.left);
            if (tempNode.right) queue.push(tempNode.right);
        }
    }

    insert(val) {
        let newNode = new TreeNode(val);
        if (!this.root) this.root = newNode;
        else {
            let node = this.transver(this.root);
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
[1, 2, 3, null, 4].forEach(item => root.insert(item));





let newTree = null, prev = null;
var evaluateTree = function (root, x, y) {

    // if (root.val == 1) return true;
    // else if (root.val == 0) return false;
    // else if (root.val == 2) return (evaluateTree(root.left) || evaluateTree(root.right));
    // else if (root.val == 3) return (evaluateTree(root.left) && evaluateTree(root.right));
    // return false;
    // if (!root) return newTree;


    // evaluateTree(root.left);
    // if (!newTree && root.val) {
    //     newTree = new TreeNode(root.val);
    //     prev = newTree
    // } else if (root.val) {
    //     prev.right = new TreeNode(root.val);
    //     prev = prev.right
    // }
    // evaluateTree(root.right);
    // return newTree

};

const result = evaluateTree(root.get(), 2, 3);

console.log(JSON.stringify(result, null, 5));


