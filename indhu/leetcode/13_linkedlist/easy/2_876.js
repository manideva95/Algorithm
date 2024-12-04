// https://leetcode.com/problems/middle-of-the-linked-list/description/

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
var middleNode = function (head) {
    let len = 0;
    let node = head;
    while (node !== null) {
        len += 1;
        node = node.next;
    }
    if (len === 1) return head
    let mid = 0, value = head;
    console.log(Math.ceil(len / 2))
    while (value !== null) {
        value = value.next;
        mid++;
        if (Math.floor(len / 2) === mid) break
    }
    return value
};