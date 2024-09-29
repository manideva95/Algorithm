// https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/description/

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
var nodesBetweenCriticalPoints = function (head) {
    let current = head.next,
        count = 1,
        position = [],
        prev = head.val;
    while (current.next) {
        count++;
        if ((prev > current.val && current.val < current.next?.val) || (prev < current.val && current.val > current.next?.val)) {
            position.push(count)
        }
        prev = current.val
        current = current.next
    }
    let min = Infinity;
    for (let i = 0; i < position.length - 1; i++) {
        min = Math.min(min, position[i + 1] - position[i])
    }
    return position.length > 1 ? [min, position[position.length - 1] - position[0]] : [-1, -1]
};