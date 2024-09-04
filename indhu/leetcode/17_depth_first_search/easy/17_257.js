// https://leetcode.com/problems/binary-tree-paths/description/

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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let result = [];

    const traversal = (root, path = '') => {
        if (!root) return

        path ? path += `->${root.val}` : path = `${root.val}`;

        if (!root.left && !root.right) {
            result.push(path)
        }
        traversal(root.left, path);
        traversal(root.right, path)
    }
    traversal(root);

    return result
};