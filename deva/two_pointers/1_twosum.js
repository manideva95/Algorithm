// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
    // console.log(nums)
    let left = nums[0]
    let leftIndex = 0
    let right = nums[nums.length - 1]
    let rightIndex = nums.length - 1
    // console.log(left, right)
    // console.log(left < right)
    while (left < right) {
        if ((left + right) == target) {
            return [left, right]
        } else if ((left + right) > target) {
            right = nums[--rightIndex]
        } else if ((left + right) < target) {
            left = nums[++leftIndex]
        }
    }
    return null
};


console.log(twoSum([2, 7, 11, 15], 9))