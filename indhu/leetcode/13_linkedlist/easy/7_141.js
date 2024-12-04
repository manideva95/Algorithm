// https://leetcode.com/problems/linked-list-cycle/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head == null || head.next == null) return 0;
    let fast = head;
    while (fast.next != null && fast.next.next != null) {
        head = head.next;
        fast = fast.next.next;
        if (head == fast) return true;
    }
    return false;
};