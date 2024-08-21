https://leetcode.com/problems/n-ary-tree-preorder-traversal/description/// 
/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    let preorder = [];
    const traversal = (root) => {
        if (!root) return
        preorder.push(root.val)
        if (root.children) {
            for (let node of root.children) {
                traversal(node)
            }
        }
    }
    traversal(root);
    return preorder;
};