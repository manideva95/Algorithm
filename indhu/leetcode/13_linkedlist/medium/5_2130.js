// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let max = 0, current = head
    let reverse = null, count = 0

    while (current) {
        count++
        reverse = new ListNode(current.val, reverse);
        current = current.next;
    };
    current = head; loopCount = count / 2
    while (current && count >= loopCount) {
        count--
        max = Math.max(current.val + reverse.val, max);
        current = current.next;
        reverse = reverse.next;
    }
    return max
};