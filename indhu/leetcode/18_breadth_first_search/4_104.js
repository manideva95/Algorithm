// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

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
var maxDepth = function (root) {
    // DFS:
    if (!root) return 0
    //     let left = maxDepth(root.left)
    //     let right = maxDepth(root.right) 
    //     return Math.max(left, right) + 1

    // BFS:
    const queue = [root];
    let depth = 0;

    while (queue.length) {
        const tempLength = queue.length
        for (let i = 0; i < tempLength; i++) {
            const node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        depth++;

    }
    return depth
};