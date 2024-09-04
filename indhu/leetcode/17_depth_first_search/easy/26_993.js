// https://leetcode.com/problems/cousins-in-binary-tree/description/

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    const traversal = (root, target, count = 0) => {
        if (!root) return
        count++;
        if (root.left?.val === target || root.right?.val === target) return { count, prev: root.val };
        return traversal(root.left, target, count) || traversal(root.right, target, count);
    }
    const result1 = traversal(root, x);
    const result2 = traversal(root, y);
    if (!result1 || !result2) return false
    return result1.count === result2.count && result1.prev !== result2.prev;
};