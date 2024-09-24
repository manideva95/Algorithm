// https://leetcode.com/problems/merge-in-between-linked-lists/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {

    let current = list1, count = 0, start;

    while (current.next) {
        count++
        let local = current.next;

        if (count === a) {
            current.next = null;
            start = list1;
        }
        if (count === b) {
            list1 = a !== b ? current.next?.next : local?.next
            break;
        }
        current = local
    }
    count = 0;
    let startCurr = start;
    while (startCurr) {
        if (!startCurr.next) {
            if (count) {
                startCurr.next = list1;
                break;
            }
            startCurr.next = list2;
            count++;
        }
        startCurr = startCurr.next;
    }
    return start
};