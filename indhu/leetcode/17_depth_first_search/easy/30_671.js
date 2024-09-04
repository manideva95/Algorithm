// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */



var findSecondMinimumValue = function (root) {
    let secondMin = Infinity;
    const traversal = (node) => {
        if (!node) return
        if (secondMin > node.val && root.val !== node.val) secondMin = node.val
        traversal(node.left);
        traversal(node.right)
    }
    traversal(root)
    return secondMin === Infinity ? -1 : secondMin
};
