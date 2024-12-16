// https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/

/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
    if (bloomDay.length < (m * k)) return -1
    let start = Math.min(...bloomDay);
    let end = Math.max(...bloomDay);
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let res = possiblity(bloomDay, m, k, mid);
        if (res) {
            end = mid - 1
        } else start = mid + 1
    }
    return start
};

const possiblity = (arr, m, k, mid) => {
    let noOfB = 0, count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= mid) {
            count++
        } else {
            noOfB += Math.floor(count / k);
            count = 0
        }
    }
    noOfB += Math.floor(count / k);
    return noOfB >= m
}