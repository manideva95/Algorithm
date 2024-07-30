// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

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
var deleteDuplicates = function (head) {
    if (!head) return head;

    let current = distinctList = new ListNode(head.val);
    while (head) {
        if (head.val !== current.val) {
            current.next = new ListNode(head.val);
            current = current.next;
        }
        head = head.next
    }
    return distinctList
};