// https://leetcode.com/problems/build-array-from-permutation/description/

var buildArray = function (nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[nums[i]])
    }
    return arr
};