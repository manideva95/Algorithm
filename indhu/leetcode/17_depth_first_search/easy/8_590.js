// https://leetcode.com/problems/n-ary-tree-postorder-traversal/

/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
    let postorderArr = [];
    const traversal = (root) => {
        if (!root) return;
        if (root.children) {
            for (let node of root.children) {
                traversal(node)
            }
        }
        postorderArr.push(root.val)
    }
    traversal(root)
    return postorderArr
};