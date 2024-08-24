// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/description/

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
var sumRootToLeaf = function (root) {
    let result = 0, binary = '';

    const traversal = (root) => {
        if (!root) return
        binary = binary + root.val.toString();
        if (!root.left && !root.right) {
            result += parseInt(binary, 2);
        }
        traversal(root.left);
        traversal(root.right);
        binary = binary.slice(0, binary.length - 1)

    }
    traversal(root)
    return result;
};