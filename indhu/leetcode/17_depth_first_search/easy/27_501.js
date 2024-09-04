// https://leetcode.com/problems/find-mode-in-binary-search-tree/

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
var findMode = function (root) {
    let map = new Map();
    const traversal = (root) => {
        if (!root) return
        map.set(root.val, (map.get(root.val) || 0) + 1)
        traversal(root.left);
        traversal(root.right);
    }
    traversal(root);
    if (map.size) {
        let max = Math.max(...map.values());
        let result = [];
        for (let [k, v] of map) {
            if (v === max) result.push(k)
        }
        return result
    } else return [0]

};