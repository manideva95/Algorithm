// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
    // if (!cloned) return null
    // if (cloned.val === target.val) return cloned

    // return getTargetCopy(null, cloned.left, target) || getTargetCopy(null, cloned.right, target)

    // BFS:

    const queue = [cloned];

    while (queue.length) {
        const node = queue.shift();
        if (node.val === target.val) return node
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);

    }

};