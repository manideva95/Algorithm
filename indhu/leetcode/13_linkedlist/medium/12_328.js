// https://leetcode.com/problems/odd-even-linked-list/description/

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
var oddEvenList = function (head) {
    if (!head) return head
    const even = head.next
    let slow = head, fast = head.next;
    while (slow && fast) {
        slow.next = slow.next.next
        fast.next = fast.next?.next || null
        if ((!slow.next && !fast.next)) {
            slow.next = even
            break
        } else if (!fast.next) {
            slow.next.next = even
        }
        fast = fast.next;
        slow = slow.next;

    }
    return head
};