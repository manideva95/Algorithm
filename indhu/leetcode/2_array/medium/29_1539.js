// https://leetcode.com/problems/kth-missing-positive-number/description/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let n = arr.length - 1;
    let start = 0, end = n;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let missing = arr[mid] - mid - 1
        if (missing < k) {
            start = mid + 1
        } else end = end - 1
    }
    return k + end + 1
};