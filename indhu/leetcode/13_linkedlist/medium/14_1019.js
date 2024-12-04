// https://leetcode.com/problems/next-greater-node-in-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
    let result = [], current = head;
    let stack = [], index = [], count = 0
    while (current.next) {
        if (current.val >= current.next.val) {
            stack.unshift(current.val);
            index.unshift(count)
        }
        else {
            result[count] = current.next.val;
            for (let i = 0; i < stack.length;) {
                if (stack[i] < current.next.val) {
                    let l = index.splice(i, 1);
                    result[l[0]] = current.next.val
                    stack.splice(i, 1);
                } else i++
            }
        }
        count++;
        current = current.next
    }
    for (let i = 0; i < stack.length; i++) {
        result[index[i]] = 0
    }
    result[result.length] = 0
    return result
};

// O/P: O(n^2)