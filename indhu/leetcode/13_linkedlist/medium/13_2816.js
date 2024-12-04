// https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/description/1

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
var doubleIt = function (head) {
    let current = head, vals = [];
    while (current) {
        vals.push(current.val);
        current = current.next;
    }
    let carry = 0;

    for (let i = vals.length - 1; i >= 0; i--) {
        carry += 2 * vals[i];
        vals[i] = carry % 10;
        carry = Math.trunc(carry / 10);
    }
    if (carry) vals.unshift(carry);

    current = head;
    while (current) {
        current.val = vals.shift()
        if (!current.next && vals.length) {
            current.next = new ListNode(vals.shift());
            break;
        }
        current = current.next;
    }
    return head
};