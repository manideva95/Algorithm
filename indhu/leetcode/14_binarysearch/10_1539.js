// https://leetcode.com/problems/kth-missing-positive-number/description/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let r = [], j = 0;
    for (let i = 1; i >= 0; i++) {
        if (i === arr[j]) {
            j++;
        } else r.push(i);
        if (r.length === k) return r[k - 1]
    }
};