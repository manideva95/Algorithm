// https://leetcode.com/problems/diameter-of-binary-tree/description/

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
// var diameterOfBinaryTree = function (root) {
//     if (!root) return 0;
//     return findMaxDepth(root.left) + findMaxDepth(root.right)
// };

// const findMaxDepth = (root) => {
//     if (!root) return 0
//     let left = findMaxDepth(root.left);
//     let right = findMaxDepth(root.result);
//     return Math.abs(left, right) + 1;
// }

var diameterOfBinaryTree = function (root) {
    let dimeter = 0;
    const findMaxDepth = (root) => {
        if (!root) return 0
        let left = findMaxDepth(root.left);
        let right = findMaxDepth(root.right);
        dimeter = Math.max(dimeter, left + right);
        return Math.max(left, right) + 1
    }
    findMaxDepth(root)
    return dimeter
};
