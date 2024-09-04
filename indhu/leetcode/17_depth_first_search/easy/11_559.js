// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/description/

/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0
    let depth = [];

    const traversal = (root, depthCount) => {
        if (!root) return;
        let tempCount = ++depthCount;
        depth.push(tempCount);
        for (let node of root.children) {
            traversal(node, tempCount);
        }
    }
    traversal(root, 0);

    return Math.max(...depth)
};