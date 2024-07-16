// https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
    nums.sort((a, b) => b - a);
    let sumOfAll = nums.reduce((a, b) => a + b, 0);
    let subsequence = [], sum = 0;

    for (let num of nums) {
        sum += num
        subsequence.push(num)
        if ((sumOfAll - sum) < sum) break;
    }

    return subsequence
};

const result = minSubsequence([1, 2, 3, 4, 5])
console.log(result);

// Observation:
// output Time Complexity : O(n)