// https://leetcode.com/problems/remove-linked-list-elements/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (!head) return head;

    let currentNode = head, prev = 0;
    while (currentNode) {
        if (!prev && currentNode.val === val) {
            if (head.next && (head.next.val !== val)) prev = head.next.val;
            head = head.next;
            currentNode = currentNode.next
            continue;
        }
        if (currentNode.next?.val === val) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }
    return head;
};