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
    // DFS

    //   let isValid = true;

    //   const traversal = (root1, root2) => {
    //   if (!root1 && !root2) return
    //     else if (!root1 || !root2) isValid = false;
    //     else{
    //       if (root1.val !== root2.val) isValid = false;

    //       if(isValid){
    //         traversal(root1.left, root2.left) 
    //         traversal(root1.right, root2.right);
    //       }
    //     }
    //   }

    //   traversal(root1,root2)
    //   return isValid

    // BFS:


    const queue1 = [root1];
    const queue2 = [root2]

    while (queue1.length) {
        const node1 = queue1.shift();
        const node2 = queue2.shift();
        if (node1?.val !== node2?.val) return false

        if ((node1?.left && !node2?.left) || (!node1?.left && node2?.left)) return false
        else if (node1?.left && node2?.left) {
            queue1.push(node1.left);
            queue2.push(node2.left);
        }

        if ((node1?.right && !node2?.right) || (!node1?.right && node2?.right)) return false
        else if (node1?.right && node2?.right) {
            queue1.push(node1.right);
            queue2.push(node2.right);
        }
    }
    return true;
};