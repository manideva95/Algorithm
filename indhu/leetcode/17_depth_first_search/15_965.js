
// https://leetcode.com/problems/univalued-binary-tree/description/
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
var isUnivalTree = function (root) {
    let rootVal = root.val, isUnivalTree = true;

    const traversal = (root) => {
        if (!root) return
        if (root.val !== rootVal) isUnivalTree = false;
        if (isUnivalTree) {
            traversal(root.left);
            traversal(root.right);
        }
    }

    traversal(root)
    return isUnivalTree
};