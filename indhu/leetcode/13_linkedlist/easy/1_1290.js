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
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    addFirst(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    get() {
        return this.head
    }
}
var getDecimalValue = function (head) {
    console.log(head.data, '1')
    if (head == null) return null
    if (head.next == null) return head
    let newHead = head.next
    let curr = head
    let prev = null
    while (curr != null && curr.next != null) {
        let temp = curr.next.next
        curr.next.next = curr
        if (prev == null) {
            prev = curr
        }
        else {
            prev.next = curr.next
            prev = curr
        }

        curr.next = temp
        curr = curr.next
    }

    return newHead
};
// let a = [1, 0, 1]
// const listFromArray = a => a.length ? new ListNode(a[0], listFromArray(a.slice(1)))
//     : null;
// const arrayFromList = head => head ? [head.val].concat(arrayFromList(head.next))
//     : [];
let nodes = new LinkedList();
[1, 2, 3, 4].forEach(element => {
    nodes.addFirst(element)
});


// console.log(nodes);
const result = getDecimalValue(nodes.get())
console.log(result);

// Observation:
// output Time Complexity : O(n)