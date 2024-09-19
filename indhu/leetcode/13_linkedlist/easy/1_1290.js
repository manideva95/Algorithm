// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {

};
let a = [1, 0, 1]
const listFromArray = a => a.length ? new ListNode(a[0], listFromArray(a.slice(1)))
    : null;
const arrayFromList = head => head ? [head.val].concat(arrayFromList(head.next))
    : [];

console.log(this.data);
const result = getDecimalValue(4009)
console.log(result);

// Observation:
// output Time Complexity : O(n)