// https://leetcode.com/problems/binary-tree-tilt/description/

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

const getSumOfChildNode = (root) => {
    let sum = 0;
    const traversal = (root) => {
        if (!root) return
        traversal(root.left);
        traversal(root.right);
        sum += root.val
    }
    traversal(root);
    return sum
}

var findTilt = function (root) {
    let result = []

    const traversal = (root, sum = 0) => {
        if (!root) return;

        let left = getSumOfChildNode(root.left);
        let right = getSumOfChildNode(root.right);

        result.push(Math.abs((left || 0) - (right || 0)));

        traversal(root.left, sum);
        traversal(root.right, sum);

    }

    traversal(root)
    return result.reduce((a, b) => a + b, 0)
};