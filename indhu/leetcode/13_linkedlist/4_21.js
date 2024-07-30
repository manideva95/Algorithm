// https://leetcode.com/problems/merge-two-sorted-lists/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var mergeTwoLists = function (list1, list2) {
    let mergedList = null;
    if (!list1) return list2;
    if (!list2) return list1

    if (list1.val > list2.val) {
        mergedList = new ListNode(list2.val)
        list2 = list2.next
    } else {
        mergedList = new ListNode(list1.val);
        list1 = list1.next
    }
    let temp = mergedList

    while (list1 !== null || list2 !== null) {
        if (!list1) {
            temp.next = list2; break;
        }
        if (!list2) {
            temp.next = list1; break;
        }
        if (list1?.val > list2?.val) {
            temp.next = new ListNode(list2.val)
            list2 = list2.next
        } else {
            temp.next = new ListNode(list1.val)
            list1 = list1.next
        }
        temp = temp.next
    }

    return mergedList
};