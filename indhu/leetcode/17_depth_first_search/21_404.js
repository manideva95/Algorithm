// https://leetcode.com/problems/sum-of-left-leaves/description/

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
var sumOfLeftLeaves = function (root) {
    let sum = 0;
    const transver = (root, type) => {
        if (!root) return
        if (type === 'left' && !root.left && !root.right) sum += root.val;

        transver(root.left, 'left')
        transver(root.right, 'right');
    }
    transver(root)
    return sum
};