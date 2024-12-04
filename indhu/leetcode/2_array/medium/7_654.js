// https://leetcode.com/problems/maximum-binary-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    let largest = 0, index = 0
    nums.forEach((element, i) => {
        if (largest < element) {
            largest = element; index = i
        }
    });
    let left = nums.slice(0, index), right = nums.slice(index + 1, nums.length);

    let tree = new TreeNode(largest);

    if (left.length) {
        tree.left = constructMaximumBinaryTree(left)
    }

    if (right.length) {
        tree.right = constructMaximumBinaryTree(right)
    }

    return tree

};