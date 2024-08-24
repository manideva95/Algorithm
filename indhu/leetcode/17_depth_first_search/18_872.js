// https://leetcode.com/problems/leaf-similar-trees/description/

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
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    const traversal = (root, leaf = []) => {
        if (!root) return []
        if (!root.left && !root.right) leaf.push(root.val);
        traversal(root.left, leaf);
        traversal(root.right, leaf);
        return leaf
    }
    let root1Leaf = traversal(root1);
    let root2Leaf = traversal(root2);

    if (root1Leaf.length !== root2Leaf.length) return false

    for (let i = 0; i < root1Leaf.length; i++) {
        if (root1Leaf[i] !== root2Leaf[i]) return false
    }
    return true;
};