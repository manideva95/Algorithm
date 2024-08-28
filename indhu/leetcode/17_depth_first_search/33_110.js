// https://leetcode.com/problems/balanced-binary-tree/description/

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
 * @return {boolean}
 */


var isBalanced = function (root) {
    let isValid = true

    const traversal = (root) => {
        if (!root) return 0
        let left = traversal(root.left);
        let right = traversal(root.right);
        if (Math.abs(left - right) > 1) {
            isValid = false;
        }
        return Math.max(left, right) + 1
    }
    traversal(root);
    return isValid;
};