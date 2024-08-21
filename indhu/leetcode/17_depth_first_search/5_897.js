// https://leetcode.com/problems/increasing-order-search-tree/description/

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
var increasingBST = function (root) {
    let newTree = null, prev = null;
    const traversal = (root) => {
        if (!root) return newTree;
        traversal(root.left);
        if (!newTree && root.val !== null && root.val !== undefined) {
            newTree = new TreeNode(root.val);
            prev = newTree
        } else if (root.val !== null && root.val !== undefined) {
            prev.right = new TreeNode(root.val);
            prev = prev.right
        }
        traversal(root.right);
    }
    traversal(root)

    return newTree
};