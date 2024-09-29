// https://leetcode.com/problems/split-linked-list-in-parts/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
    let result = [], size = 0
    let current = head;
    while (current) {
        size++;
        current = current.next
    }
    let mod = size > k ? size % k : 0, len = Math.floor(size / k)
    !len ? len++ : null;
    for (let i = 0; i < k; i++) {
        let current = head, j = mod > 0 ? 1 + len : len;
        mod--;
        if (current) {
            while (j > 0 && current) {
                if ((j - 1) === 0 || !current.next) {
                    let temp = current.next;
                    current.next = null;
                    result.push(head);
                    head = temp
                    current = temp;
                } else current = current.next;
                j--;
            }
        } else result.push(null)
    }
    return result
};