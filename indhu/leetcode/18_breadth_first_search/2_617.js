// https://leetcode.com/problems/merge-two-binary-trees/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    // DFS:
    //     if (!root1) return root2;
    // else if (!root2) return root1;
    // else {
    //     root1.val += root2.val;
    //     root1.left = mergeTrees(root1.left, root2.left);
    //     root1.right = mergeTrees(root1.right, root2.right);
    //     return root1
    // }

    // BFS:
    if (!root1 && !root2) return null;
    else if (!root1) return root2;
    else if (!root2) return root1;
    const queue = [[root1, root2]];
    while (queue.length) {
        const [node1, node2] = queue.shift();
        node1.val += node2.val
        if (node1.left && node2.left) {
            queue.push([node1.left, node2.left])
        } else if (!node1.left) {
            node1.left = node2.left
        }
        if (node1.right && node2.right) {
            queue.push([node1.right, node2.right])
        } else if (!node1.right) {
            node1.right = node2.right
        }
    }
    return root1
};