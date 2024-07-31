// https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/description/

/**
 * @param {number[]} nums
 * @return {number}
 */

const countTheGreatestVal = (nums, x) => {
    let count = 0;
    nums.forEach(element => {
        if (element >= x) count++;
    });
    return count;
}

var specialArray = function (nums) {
    nums.sort((a, b) => a - b);
    let start = 0; end = nums.length;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let ans = countTheGreatestVal(nums, mid);
        if (ans === mid) return mid;
        else if (ans > mid) start = mid + 1;
        else end = mid - 1;
    }
    return -1
};