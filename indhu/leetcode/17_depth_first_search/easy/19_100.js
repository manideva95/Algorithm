// https://leetcode.com/problems/same-tree/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (root1, root2) {
    let isValid = true;

    const traversal = (root1, root2) => {
        if (!root1 && !root2) return
        else if (!root1 || !root2) isValid = false;
        else {
            if (root1.val !== root2.val) isValid = false;

            if (isValid) {
                traversal(root1.left, root2.left)
                traversal(root1.right, root2.right);
            }
        }
    }

    traversal(root1, root2)
    return isValid
};