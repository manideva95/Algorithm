// https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    const map = new Map(), result = [[nums[0]]];
    map.set(nums[0], 1)
    for (let i = 1; i < nums.length; i++) {
        let val = map.get(nums[i])
        map.set(nums[i], (val || 0) + 1);
        if (val) {
            result[val] ? result[val].push(nums[i]) : result.push([nums[i]])
        } else result[0].push(nums[i])
    }
    return result
};