// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
        if (nums[i - 1] !== nums[i]) {
            prev = nums[i];
            let j = i + 1, k = nums.length - 1;
            while (j < k) {
                let sum = nums[i] + nums[j] + nums[k];
                if (sum < 0) {
                    j++;
                } else if (sum > 0) {
                    k--;
                } else {
                    ans.push([nums[i], nums[j], nums[k]]);
                    j++; k--;
                    while (nums[j] === nums[j - 1]) j++;
                    while (nums[k] === nums[k + 1]) k--;
                }
            }
        }
    }
    return ans
};