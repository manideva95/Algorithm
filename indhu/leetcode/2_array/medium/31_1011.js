// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    let start = Math.max(...weights), end = weights.reduce((a, b) => a + b, 0);
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let res = findCapacity(weights, days, mid);
        if (res > days) {
            start = mid + 1
        } else end = mid - 1;
    }
    return start
};

const findCapacity = (arr, d, mid) => {
    let sum = 0, days = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum > mid) {
            sum = arr[i];
            days++
        }
    }
    days++;
    return days
}