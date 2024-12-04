// https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
    let set = new Set(nums), current = head;
    while (current) {
        if (set.has(current.next?.val)) {
            current.next = current.next.next
            current = current
        } else current = current.next
    }

    return set.has(head.val) ? head.next : head
};