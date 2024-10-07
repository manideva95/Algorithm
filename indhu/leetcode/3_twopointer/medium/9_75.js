// https://leetcode.com/problems/sort-colors/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    for (let i = 1; i <= nums.length; i++) {
        console.log(nums, 1)
        if (nums[i] < nums[i - 1]) {
            [nums[i - 1], nums[i]] = [nums[i], nums[i - 1]];
            let j = i - 2;
            let k = i - 1;
            while (nums[j] > nums[k]) {
                console.log(nums, nums[j], nums[k]);
                [nums[j], nums[k]] = [nums[k], nums[j]];
                j--;
                k--;
            }
        }
    }
    return nums
};

console.log(sortColors([7, 4, 2, 3, 8, 6]))