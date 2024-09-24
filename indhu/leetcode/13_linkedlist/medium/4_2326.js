// https://leetcode.com/problems/spiral-matrix-iv/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
    let result = Array(m).fill(0).map(() => Array(n).fill(-1))
    let rowS = 0, rowE = m - 1, colS = 0, colE = n - 1;

    while (rowS <= rowE && colS <= colE) {

        for (let i = colS; i <= colE && head; i++) {
            result[rowS][i] = head.val
            head = head.next
        }
        rowS++;

        for (let i = rowS; i <= rowE && head; i++) {
            result[i][colE] = head.val
            head = head.next
        }
        colE--

        for (let i = colE; i >= colS && head; i--) {
            result[rowE][i] = head.val
            head = head.next
        }
        rowE--;

        for (let i = rowE; i >= rowS && head; i--) {
            result[i][colS] = head.val
            head = head.next
        }
        colS++
    }
    return result
};