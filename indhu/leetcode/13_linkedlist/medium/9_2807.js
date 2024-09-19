// https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
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
var insertGreatestCommonDivisors = function (head) {
    let current = head;
    while (current.next) {
        if (current.next.val) {
            let smallVal = current.val > current.next.val ? current.next.val : current.val;
            let result = 1;
            if (!(smallVal % 2) && ((!(current.next.val % 2) && (current.val % 2)) || ((current.next.val % 2) && !(current.val % 2)))) {
                smallVal--
            }
            for (let i = smallVal; i > 0; i = i - 2) {
                if (!(current.next.val % i) && !(current.val % i)) {
                    result = i; break
                }
            }

            current.next = new ListNode(result, current.next);
            current = current.next.next
        } else {
            current = current.next
        }
    }
    return head
};