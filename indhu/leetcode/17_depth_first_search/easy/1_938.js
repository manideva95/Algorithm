// https://leetcode.com/problems/range-sum-of-bst/description/

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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    let sum = 0;
    const search = (node) => {
        if (!node) {
            return
        }
        if (node.val >= low && node.val <= high) sum += node.val
        search(node.left);
        search(node.right);
    }
    search(root);
    return sum
};