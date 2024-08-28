// https://leetcode.com/problems/sum-of-left-leaves/description/

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
var sumOfLeftLeaves = function (root) {
    const queue = [root];
    let sum = 0;

    while (queue.length) {
        let node = queue.shift();
        if (node.left?.val && !node.left?.left && !node.left?.right) {
            console.log(node.left.val)
            sum += node.left.val
        }
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return sum
};