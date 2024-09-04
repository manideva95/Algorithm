// https://leetcode.com/problems/average-of-levels-in-binary-tree/description/

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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let result = [];
    const queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let currentLength = queue.length;

        let currentNodes = [];

        while (currentLength > 0) {
            const tempNode = queue.shift();
            if (tempNode) {
                currentNodes.push(tempNode.val)

                if (tempNode.left) {
                    queue.push(tempNode.left);
                }

                if (tempNode.right) {
                    queue.push(tempNode.right);
                }
            }
            currentLength--
        }
        let sum = currentNodes.reduce((a, b) => a + b, 0)
        result.push(sum / currentNodes.length)

    }
    return result
};