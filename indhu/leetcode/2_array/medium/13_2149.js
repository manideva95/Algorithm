// https://leetcode.com/problems/rearrange-array-elements-by-sign/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    const pos = [], neg = [], result = []
    let i = 0; j = 1;
    while (j < nums.length) {
        if (nums[i] < 0) neg.push(nums[i])
        else pos.push(nums[i])
        if (nums[j] < 0) neg.push(nums[j])
        else pos.push(nums[j])
        i = i + 2;
        j = j + 2;
    }
    i = 0;
    while (i < neg.length) {
        result.push(pos[i], neg[i])
        i++
    }

    return result
};