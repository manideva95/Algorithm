// https://leetcode.com/problems/minimum-distance-between-bst-nodes/description/

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


var minDiffInBST = function (root) {
    let min = Infinity, prev;
    const traversal = (root) => {
        if (root == null) return;
        traversal(root.left);
        if (prev != null) {
            min = Math.min(min, root.val - prev);
        }
        prev = root.val;
        traversal(root.right);
    }

    traversal(root);
    return min;
};