// https://leetcode.com/problems/4sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] === nums[i - 1]) continue
        for (let j = i + 1; j < n; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue
            let l = j + 1, k = nums.length - 1;
            while (l < k) {
                let sum = nums[i] + nums[j] + nums[l] + nums[k];
                if (sum < target) {
                    l++
                } else if (sum > target) k--;
                else {
                    ans.push([nums[i], nums[j], nums[l], nums[k]])
                    l++; k--;
                    while (nums[l] === nums[l - 1]) l++;
                    while (nums[k] === nums[k + 1]) k--;
                }
            }
        }
    }
    return ans
};