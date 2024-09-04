// https://leetcode.com/problems/path-sum/description/

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    let isValid = false;
    const preorderTraversal = (root, sum = 0) => {
        if (!root) return
        sum += root.val;
        if (sum === targetSum && !root.left && !root.right) isValid = true;
        if (!isValid) {
            preorderTraversal(root.left, sum)
            preorderTraversal(root.right, sum)
        }
    }
    preorderTraversal(root);
    return isValid;
};