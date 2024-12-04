// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    let slow = head, fast = head.next, size = 0;

    let current = head;
    let reverse = null
    let endVal, startVal;
    while (current) {
        size++;
        reverse = reverse = new ListNode(current.val, reverse);
        current = current.next
    }
    current = head
    let count = 0;

    while (current) {
        count++
        if (count === k) {
            current.val = reverse.val;
        }
        if ((size - k + 1) === count) {
            current.val = reverse.val;
        }
        current = current.next;
        reverse = reverse.next;
    }
    return head

};