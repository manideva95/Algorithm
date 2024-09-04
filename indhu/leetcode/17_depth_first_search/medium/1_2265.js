// https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/description/

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
var averageOfSubtree = function (root) {
    let result = 0;
    const traversal = (root) => {
        if (!root) return;

        let left = traversal(root.left);
        let right = traversal(root.right);
        let sum = root.val, count = 1

        if (left) {
            sum += left.sum;
            count += left.count;
        }
        if (right) {
            sum += right.sum;
            count += right.count
        }
        if (Math.floor(sum / count) === root.val) result++
        return { sum, count }
    }
    traversal(root)
    return result
};