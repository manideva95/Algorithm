// https://leetcode.com/problems/merge-nodes-in-between-zeros/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
    let prev = head, sum = 0, current = head.next;
    while (current) {
        if (current.val) sum += current.val;
        else {
            prev.val = sum;
            prev.next = current.next;
            prev = prev.next;
            sum = 0
        }
        current = current.next
    }

    return head
};