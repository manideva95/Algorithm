// https://leetcode.com/problems/minimum-depth-of-binary-tree/description/

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
var minDepth = function (root) {
    if (!root) return 0
    let min = [];
    const traversal = (root, depth = 0) => {
        if (!root) return null;
        depth++;
        if (!root.left && !root.right) min.push(depth)
        traversal(root.left, depth);
        traversal(root.right, depth);
    }
    traversal(root)
    return Math.min(...min)
};