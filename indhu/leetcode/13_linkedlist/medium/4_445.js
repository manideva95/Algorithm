// https://leetcode.com/problems/add-two-numbers-ii/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let rL1 = null, rL2 = null, carry = 0;

    while (l1 || l2) {
        let temp;
        if (l1) {
            temp = l1.next;
            l1.next = rL1;
            rL1 = l1;
            l1 = temp;
        }
        if (l2) {
            temp = l2.next;
            l2.next = rL2;
            rL2 = l2;
            l2 = temp;
        }
    }
    let result = null;
    while (rL1 || rL2) {
        let sum = carry + (rL1?.val ?? 0) + (rL2?.val ?? 0);
        result = new ListNode(sum > 9 ? sum % 10 : sum, result);
        carry = Math.trunc(sum / 10);
        rL1 = rL1?.next;
        rL2 = rL2?.next;
    }
    if (carry) result = new ListNode(carry, result);
    return result;
};