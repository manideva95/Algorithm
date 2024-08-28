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
    // DFS:
    // if(!root) return 0
    // let depth = [];

    // const traversal = (root, depthCount) =>{
    //     if(!root) return;
    //     let tempCount = ++depthCount;
    //     depth.push(tempCount);
    //     for(let node of root.children){
    //         traversal(node,tempCount);
    //     }
    // }
    // traversal(root,0);

    // return Math.max(...depth)

    // BFS:
    if (!root) return root
    let queue = [[root]], maxDepth = 0;

    while (queue.length) {
        let node = queue.shift();
        maxDepth++;
        let local = []
        for (let i = 0; i < node.length; i++) {
            for (let children of node[i].children) {
                local.push(children)
            }
        }

        local.length && queue.push(local)
    }
    return maxDepth;
};