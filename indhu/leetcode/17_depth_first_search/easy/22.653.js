// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/

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
 * @param {number} k
 * @return {boolean}
 */


var findTarget = function (root, k) {
    let set = new Set(), isValid = false;
    const transver = (root) => {
        if (!root) return;
        if (set.has(k - root.val)) isValid = true;
        else set.add(root.val);
        if (!isValid) {
            transver(root.left);
            transver(root.right)
        }
    }
    transver(root);
    return isValid
};