// https://leetcode.com/problems/deepest-leaves-sum/description/
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
var deepestLeavesSum = function (root) {
    let max = 0, sum = 0;
    const findMaxDepth = (root, count = 0) => {
        if (!root) return 0;
        count++;
        max = Math.max(max, count)
        findMaxDepth(root.left, count);
        findMaxDepth(root.right, count);
    }
    findMaxDepth(root);
    const findSum = (root, count = 0) => {
        if (!root) return 0;
        count++;
        if (count === max) {
            sum += root.val
        }
        findSum(root.left, count);
        findSum(root.right, count);
    }
    findSum(root);

    return sum
};