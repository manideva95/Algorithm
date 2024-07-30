// https://leetcode.com/problems/palindrome-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let collectedValue = '';
    let list = head;
    while (list !== null) {
        collectedValue = collectedValue + `${list.val}`
        list = list.next
    }

    if (collectedValue === collectedValue.split('').reverse().join('')) {
        return true
    } else return false
};