// https://leetcode.com/problems/sort-list/description/

var sortList = function (head) {
    if (!head || !head.next) return head;
    let [left, right] = split(head);
    let nodes = new ListNode(null);
    return merge(nodes, sortList(left), sortList(right))
}

const split = (head) => {
    let slow = head;
    let fast = head.next;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let right = slow.next;
    slow.next = null;

    return [head, right]
};

const merge = (nodes, left, right) => {
    let pointer = nodes;

    while (left || right) {
        if (!left) {
            pointer.next = right;
            right = right.next;
        } else if (!right) {
            pointer.next = left;
            left = left.next;
        } else {
            if (left.val < right.val) {
                pointer.next = left; left = left.next;
            } else {
                pointer.next = right; right = right.next;
            }
        }
        pointer = pointer.next
    }
    return nodes.next

}