class LinkedListNode {
    val;
    next;
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Solution {
    head;

    constructor(head) {
        this.head = null
    }
    addLast(val) {
        if (!this.head) {
            this.head = new LinkedListNode(val);
            return this.head
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new LinkedListNode(val);
        this.head = current;
        return this.head
    }

}
4, 1, 8, 4, 5
5, 6, 1, 8, 4, 5

function fn(s) {
    const headA = new Solution()
    // const data1 = headA.addLast(4);
    // const data2 = headA.addLast(1);
    headA.addLast(8);
    headA.addLast(4);
    let a = headA.addLast(5);

    const headB = new Solution()
    // headB.addLast(5);
    // headB.addLast(6);
    // headB.addLast(1);
    headB.addLast(8);
    headB.addLast(4);
    let b = headB.addLast(5);

    console.log(a === b);

}
const data = fn("ab_   a");
console.log(data);


