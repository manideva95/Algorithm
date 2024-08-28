// https://leetcode.com/problems/subtree-of-another-tree/description/

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

const validate = (root1, root2) => {
    if (!root1 && !root2) return
    if (root1?.val !== root2?.val) return true
    return validate(root1.left, root2.left) || validate(root1.right, root2.right);
}

const isSubtree = (root, subRoot) => {
    let isValid = false;
    const traversal = (root) => {
        if (!root) return
        if (root.val === subRoot.val && !validate(root, subRoot)) isValid = true;
        if (!isValid) {
            traversal(root.left);
            traversal(root.right);
        }
    }
    traversal(root)
    return isValid
}