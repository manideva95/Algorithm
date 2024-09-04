// https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/description/
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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
    let sum = 0;
    const result = []
    const traversal = (root) => {
        if (!root) return;

        traversal(root.right);
        if (root.val || root.val === 0) {
            sum += root.val;
            root.val = sum
            result.push(sum)
        }
        traversal(root.left);
    }
    traversal(root)
    return root
};