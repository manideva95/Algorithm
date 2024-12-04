// https://leetcode.com/problems/remove-nodes-from-linked-list/description/

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
var removeNodes = function (head) {
    if (!head.next) return head;
    head.next = removeNodes(head.next);
    return head.next.val > head.val ? head.next : head;
};